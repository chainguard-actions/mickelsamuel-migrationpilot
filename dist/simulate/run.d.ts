/**
 * Migration simulation against an ephemeral in-process PostgreSQL.
 *
 * Static analysis reads a migration. This runs it. Every run gets a brand new
 * PGlite instance — a full PostgreSQL compiled to WASM, living in memory for
 * the length of the command and discarded afterwards. Nothing touches disk,
 * nothing touches a network, and no two runs can contaminate each other.
 *
 * What that buys, which no amount of AST inspection can: the server's own
 * verdict. `CREATE INDEX CONCURRENTLY` inside a transaction fails here for the
 * same reason it fails in production, with the same error text and the same
 * SQLSTATE. A cast PostgreSQL refuses to make is refused here. A statement that
 * references a column an earlier migration forgot to add errors out, in order,
 * at the exact statement that depends on it.
 *
 * What it emphatically does not buy is production behaviour. PGlite is a single
 * connection, so nothing can ever be blocked by anything; and the tables are
 * empty, so every rewrite is instant. Those two facts are why `simulate` merges
 * the static report rather than replacing it, and why `limits` is a field of
 * the report rather than a footnote someone can drop on the way to a dashboard.
 */
import type { EngineVersion } from './introspect.js';
import type { SchemaDiff } from '../drift/compare.js';
import type { AnalysisOutput } from '../output/cli.js';
/** A PostgreSQL error, field by field, as the server reported it. */
export interface PgErrorInfo {
    /** The server's message, verbatim. Never reworded. */
    message: string;
    /** SQLSTATE, e.g. '25001'. */
    code: string | null;
    severity: string | null;
    detail: string | null;
    hint: string | null;
    /** 1-based character position within the statement, when the server gave one. */
    position: number | null;
    /** Server routine that raised it — useful when reporting a PGlite bug upstream. */
    routine: string | null;
}
export type StatementStatus = 'ok' | 'error' | 'not-run';
export interface SimulatedStatement {
    /** 1-based position within its migration file. */
    index: number;
    /** 1-based line in the source file. */
    line: number;
    sql: string;
    status: StatementStatus;
    /** Wall-clock milliseconds. 0 for statements that never ran. */
    durationMs: number;
    /** Rows the server reported as affected, when it reported any. */
    rowsAffected: number | null;
    /** Rows returned, for statements that return a result set. */
    rowsReturned: number | null;
    error: PgErrorInfo | null;
}
/** State the session was left in once a migration finished or gave up. */
export type TransactionState = 'none' | 'open' | 'aborted';
export interface StaticReport {
    /** Full static analysis, or null when the file could not be parsed. */
    analysis: AnalysisOutput | null;
    /** Parse failure from the static pipeline, verbatim. */
    error: string | null;
    /** PostgreSQL version the static rules were evaluated against. */
    pgVersion: number;
}
export interface SimulationReport {
    file: string;
    engine: EngineVersion;
    /** Path of the `--baseline` schema loaded before anything ran, if any. */
    baselinePath: string | null;
    /** Schema introspected for the diff. */
    schema: string;
    statements: SimulatedStatement[];
    /** How many statements actually ran, successfully or not. */
    executed: number;
    /** 1-based index of the statement that failed, or null. */
    failedIndex: number | null;
    /** Sum of statement durations for this file. */
    totalDurationMs: number;
    /** Milliseconds spent booting PostgreSQL. Excluded from statement timings. */
    bootMs: number;
    /** Catalog changes this file made, on top of whatever ran before it. */
    diff: SchemaDiff;
    transactionState: TransactionState;
    /** True when libpg-query rejected the file and the raw splitter ran. */
    splitFallback: boolean;
    parseErrors: string[];
    static: StaticReport | null;
    /** What this run cannot tell you. Part of the report, not a footnote. */
    limits: string[];
}
export interface SimulationRun {
    engine: EngineVersion;
    baselinePath: string | null;
    schema: string;
    /** Milliseconds spent booting PostgreSQL, once for the whole run. */
    bootMs: number;
    /** One report per migration that ran, in order. */
    reports: SimulationReport[];
    /** Migrations that never ran because an earlier one failed. */
    notRun: string[];
    /** True when any migration hit a statement error. */
    failed: boolean;
}
export interface MigrationInput {
    /** Display path. */
    file: string;
    sql: string;
    /** Static analysis for this file, merged into its report. */
    static?: StaticReport | null;
}
export interface SimulateOptions {
    migrations: MigrationInput[];
    /** Baseline schema loaded before any migration runs. */
    baseline?: {
        path: string;
        sql: string;
    };
    /** Schema to introspect for diffs. Defaults to 'public'. */
    schema?: string;
}
/** Thrown when the `--baseline` schema itself fails to load. */
export declare class BaselineError extends Error {
    path: string;
    pgError: PgErrorInfo;
    constructor(path: string, pgError: PgErrorInfo);
}
/** The npm name of the optional engine, in one place. */
export declare const ENGINE_PACKAGE = "@electric-sql/pglite";
/**
 * What to tell someone who does not have the engine installed.
 *
 * There are three ways to be running this command and the instruction is not
 * the same for all of them, which is what made the old one-liner useless: told
 * to `npm install @electric-sql/pglite`, someone running `npx migrationpilot`
 * installed it into their project and got the identical message back, because
 * the CLI only ever looked in its own throwaway npx directory. It looks in the
 * invoking project too now, so that instruction finally works — and the case it
 * does not cover, a globally installed CLI, gets its own line.
 */
export declare const ENGINE_INSTALL_HINT: string;
/**
 * Thrown when the PostgreSQL engine cannot be loaded.
 *
 * PGlite is an optional peer dependency: it is 25 MB unpacked, and most people
 * reach MigrationPilot through a one-shot `npx` run of `analyze` or `check`
 * that never needs it. Simulating is opt-in, so the engine is too — which means
 * "you haven't installed it yet" is an ordinary outcome that deserves a
 * sentence, not a stack trace.
 */
export declare class EngineUnavailableError extends Error {
    /** `not-installed` when the package is absent; `load-failed` when it is present but broke. */
    reason: 'not-installed' | 'load-failed';
    /** The underlying failure, for the load-failed case. */
    cause: unknown;
    constructor(reason: 'not-installed' | 'load-failed', cause: unknown);
}
/**
 * Find the engine in `dir`'s dependency tree.
 *
 * A bare import only ever searches upwards from where the CLI itself lives.
 * Under `npx` that is a throwaway cache directory the user cannot install
 * anything into, so `npm install @electric-sql/pglite` — the one instruction
 * the command gave them — could never take effect and `simulate` was
 * unreachable that way entirely. The engine they installed is in their project,
 * so look there too.
 *
 * The `package.json` being joined on is an anchor, not a requirement: Node
 * resolves relative to the containing directory and never opens the file, so
 * this works in a directory that has no package.json at all.
 *
 * @returns the resolved entry path, or null when the package is not there.
 */
export declare function resolveEngineFrom(dir: string): string | null;
/**
 * Run migrations against one fresh ephemeral PostgreSQL and report what happened.
 *
 * Migrations run in the order given, against the same database, because that is
 * how they will run in production: migration 7 gets to see what migration 3
 * did, including the column migration 3 forgot to add.
 *
 * Execution stops at the first error. Everything after it would either not run
 * at all, or run against a database in a state the author never intended, so
 * reporting the rest as "not run" is the only honest answer available.
 */
export declare function simulate(options: SimulateOptions): Promise<SimulationRun>;
/**
 * Normalise a thrown value into PostgreSQL's own error fields.
 *
 * PGlite rethrows the server's ErrorResponse with its fields intact, so the
 * message here is the server's message — not a paraphrase, and not something
 * MigrationPilot composed.
 */
export declare function toPgError(err: unknown): PgErrorInfo;
/**
 * The standing caveats, plus whatever this particular run has to admit to.
 *
 * Generated from the report rather than written only into the docs, so they
 * travel with `--format json` into whatever consumes it.
 */
export declare function buildLimits(report: SimulationReport): string[];
//# sourceMappingURL=run.d.ts.map