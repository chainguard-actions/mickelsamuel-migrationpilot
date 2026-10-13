import type { LockClassification } from '../locks/classify.js';
import type { TableStats, AffectedQuery } from '../scoring/score.js';
import type { ProductionContext } from '../production/context.js';
import type { CatalogContext, ExistingIndex, TableExtensionInfo, TableFacts } from '../production/catalog.js';
export type { StaleDirective } from './disable.js';
export type Severity = 'critical' | 'warning';
export interface RuleViolation {
    ruleId: string;
    ruleName: string;
    severity: Severity;
    message: string;
    line: number;
    safeAlternative?: string;
    /**
     * Index of the statement that triggered this violation, stamped by
     * `runRules`. Rules do not set it. Grouping violations under their statement
     * by line number alone breaks the moment two statements share a line, which
     * `DROP TABLE a; DROP TABLE b;` on one line does.
     */
    statementIndex?: number;
}
export interface RuleContext {
    /** The original SQL text of this statement */
    originalSql: string;
    /** Line number in the migration file */
    line: number;
    /** Target PostgreSQL version */
    pgVersion: number;
    /** Lock classification for this statement */
    lock: LockClassification;
    /** All statements in the migration (for multi-statement rules) */
    allStatements: Array<{
        stmt: Record<string, unknown>;
        originalSql: string;
    }>;
    /** Index of this statement in allStatements */
    statementIndex: number;
    /** Production context — table stats (requires --database-url) */
    tableStats?: TableStats;
    /** Production context — affected queries (requires --database-url) */
    affectedQueries?: AffectedQuery[];
    /** Production context — active connections on target table (requires --database-url) */
    activeConnections?: number;
    /** Production context — existing indexes on the target table (optional) */
    existingIndexes?: ExistingIndex[];
    /** Production context — write counters and partition shape for the target table (optional) */
    tableFacts?: TableFacts;
    /** Production context — TimescaleDB / Citus / pg_partman info for the target table (optional) */
    tableExtensions?: TableExtensionInfo;
    /** Production context — cluster-wide state: replication, disk, settings, installed extensions (optional) */
    cluster?: CatalogContext;
    /**
     * Production context — the whole context, for rules whose target table is not
     * the one the engine resolved (DML statements, partition parents).
     */
    production?: ProductionContext;
}
export interface Rule {
    id: string;
    name: string;
    severity: Severity;
    description: string;
    whyItMatters: string;
    docsUrl: string;
    /**
     * Set when the rule reads live catalog data and cannot fire without it.
     * These rules stay silent unless --database-url supplies production context.
     * Enforced by tests/requires-database-url.test.ts.
     */
    requiresDatabaseUrl?: true;
    check(stmt: Record<string, unknown>, context: RuleContext): RuleViolation | null;
}
/**
 * Runs all enabled rules against a set of parsed statements.
 * Returns all violations sorted by line number.
 *
 * When productionContext is provided (from --database-url), rules receive table stats,
 * affected queries, and active connection counts for the target tables.
 *
 * When fullSql is provided, inline disable comments are respected:
 * -- migrationpilot-disable MP001       (disable for next statement)
 * -- migrationpilot-disable-file        (disable for entire file)
 */
export declare function runRules(rules: Rule[], statements: Array<{
    stmt: Record<string, unknown>;
    originalSql: string;
    line: number;
    lock: LockClassification;
}>, pgVersion: number, productionContext?: ProductionContext, fullSql?: string): RuleViolation[];
/**
 * The violations belonging to one statement.
 *
 * `runRules` stamps every violation with the statement that produced it, so
 * that is the authority. The line fallback covers violations raised outside the
 * per-statement loop — the raw-text PG18 pass is the only one today.
 */
export declare function violationsOfStatement(violations: RuleViolation[], statementIndex: number, line: number): RuleViolation[];
/**
 * Find disable directives that don't suppress any violations (stale comments).
 */
export declare function checkStaleDirectives(fullSql: string, violations: RuleViolation[], statementLines: number[]): import("./disable.js").StaleDirective[];
/**
 * Apply config-based severity overrides to violations.
 * Allows users to downgrade critical→warning or upgrade warning→critical per rule.
 */
export declare function applySeverityOverrides(violations: RuleViolation[], ruleOverrides?: Record<string, boolean | {
    enabled?: boolean;
    severity?: Severity;
    threshold?: number;
}>): RuleViolation[];
//# sourceMappingURL=engine.d.ts.map