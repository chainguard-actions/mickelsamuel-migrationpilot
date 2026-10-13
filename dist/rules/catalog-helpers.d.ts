/**
 * Shared helpers for the catalog-aware and extension-aware rules (MP100-MP112).
 *
 * Every function here is safe to call without production context — the lookups
 * return undefined and the rules that use them stay silent, which is how these
 * rules behave on every run without --database-url.
 */
import type { RuleContext } from './engine.js';
import type { TableExtensionInfo, TableFacts } from '../production/catalog.js';
import type { TableStats } from '../scoring/score.js';
/** Formats a byte count the same way MP014 does. */
export declare function formatBytes(bytes: number): string;
/**
 * Formats a memory setting the way PostgreSQL itself prints it — binary units,
 * no decimal point when the value divides evenly. 67108864 renders as "64MB",
 * which is what SHOW maintenance_work_mem says and what the user wrote in
 * postgresql.conf.
 */
export declare function formatMemorySetting(bytes: number): string;
/** Formats a duration in seconds as a coarse, human-readable string. */
export declare function formatDuration(seconds: number): string;
/** The table a DML statement targets, if this is DML. */
export declare function dmlTargetTable(stmt: Record<string, unknown>): string | null;
/** Table stats for any table, not just the one the engine resolved. */
export declare function lookupTableStats(ctx: RuleContext, tableName: string): TableStats | undefined;
/** Table facts for any table, not just the one the engine resolved. */
export declare function lookupTableFacts(ctx: RuleContext, tableName: string): TableFacts | undefined;
/** Extension info for any table, not just the one the engine resolved. */
export declare function lookupTableExtensions(ctx: RuleContext, tableName: string): TableExtensionInfo | undefined;
/**
 * Full-rewrite operations: PostgreSQL writes a complete new copy of the table
 * before dropping the old one, so peak disk usage is roughly double and the whole
 * copy goes through WAL.
 */
export interface RewriteOp {
    /** Human-readable name of the operation, e.g. "VACUUM FULL". */
    label: string;
    /**
     * Table the rewrite targets, read straight from the statement. Rules resolve
     * stats through this rather than ctx.tableStats, because the engine's target
     * extraction does not cover VACUUM and CLUSTER.
     */
    tableName?: string;
}
export declare function classifyRewrite(stmt: Record<string, unknown>, pgVersion: number): RewriteOp | null;
/**
 * Key columns of a CREATE INDEX statement, in index order.
 *
 * Returns null when any key is an expression rather than a plain column — the
 * rules that compare against catalog indexes stay silent in that case rather
 * than guess at how PostgreSQL would render the expression.
 */
export declare function indexKeyColumns(idx: {
    indexParams?: Array<{
        IndexElem?: {
            name?: string;
            expr?: unknown;
        };
    }>;
}): string[] | null;
/** Normalizes an index key expression for comparison against catalog output. */
export declare function normalizeKey(key: string): string;
/** Writes per second for a table, when the stats window is known. */
export declare function writesPerSecond(facts: TableFacts): number | undefined;
/** Total row-level writes recorded since the stats window started. */
export declare function totalWrites(facts: TableFacts): number;
//# sourceMappingURL=catalog-helpers.d.ts.map