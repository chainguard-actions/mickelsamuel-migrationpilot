/**
 * Output formatting for `migrationpilot simulate`.
 *
 * The report has two halves that answer different questions, and the format
 * keeps them visibly separate rather than blending them into one verdict.
 * Static analysis answers "what will this do to a busy production database" —
 * locks, contention, rewrite cost. Execution answers "does this actually run" —
 * the server's own yes or no. A migration can pass one and fail the other, and
 * the reader needs to see which is which.
 */
import type { SimulationReport, SimulationRun, PgErrorInfo } from './run.js';
import type { Rule } from '../rules/engine.js';
/**
 * Render a PostgreSQL error the way PostgreSQL renders it, including the caret
 * line when the server told us where in the statement it gave up.
 */
export declare function formatPgError(error: PgErrorInfo, sql: string): string[];
export interface SimulationFormatOptions {
    /** Rules, for docs links on static violations. */
    rules?: Rule[];
    /**
     * Print the caveats block. The multi-file report prints them once at the end
     * instead of repeating an identical block under every migration.
     */
    showLimits?: boolean;
}
export declare function formatSimulationReport(report: SimulationReport, options?: SimulationFormatOptions): string;
/**
 * Text report for a run spanning several migrations.
 *
 * The migrations shared one database, in order, so the per-file sections read
 * as a sequence rather than as independent results — and a file listed under
 * "never ran" did not pass, it simply never got its turn.
 */
export declare function formatSimulationRun(run: SimulationRun, options?: SimulationFormatOptions): string;
/**
 * Machine-readable report.
 *
 * The static half is the existing `analyze --format json` document, embedded
 * unchanged under `static`, so anything that already parses MigrationPilot
 * reports keeps working on this one.
 */
export declare function formatSimulationJson(report: SimulationReport, rules?: Rule[]): string;
/**
 * Machine-readable report for a multi-migration run.
 *
 * Mirrors `analyze` vs `check`: one file gets the flat document above, several
 * get this one with a `files` array, so a consumer can tell the two apart by
 * shape alone.
 */
export declare function formatSimulationRunJson(run: SimulationRun, rules?: Rule[]): string;
//# sourceMappingURL=format.d.ts.map