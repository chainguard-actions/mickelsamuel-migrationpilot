/**
 * Trigger cascade analysis.
 *
 * Analyzes SQL for trigger cascade effects. Given a table DDL operation,
 * identifies triggers that might fire and cascading effects across tables.
 *
 * When a database URL is provided, queries pg_trigger for real trigger
 * definitions. Otherwise, performs static analysis by parsing CREATE TRIGGER
 * statements from the SQL to infer cascade chains.
 *
 * SAFETY: Only reads from pg_catalog. Never modifies data.
 */
export interface TriggerInfo {
    /** Trigger name. */
    name: string;
    /** Trigger event (INSERT, UPDATE, DELETE, TRUNCATE). */
    event: string;
    /** Trigger timing (BEFORE, AFTER, INSTEAD OF). */
    timing: string;
    /** Table the trigger acts upon or references. */
    targetTable: string;
}
export interface CascadeResult {
    /** The table being modified by the DDL operation. */
    table: string;
    /** Triggers that may fire on this table. */
    triggers: TriggerInfo[];
    /** Tables that may be affected through cascading trigger chains. */
    cascadingTables: string[];
    /** Depth of the deepest cascade chain discovered. */
    depth: number;
    /** Human-readable warning about cascade impact. */
    warning: string;
}
/**
 * Analyze SQL for trigger cascade effects.
 *
 * If `dbUrl` is provided, connects to the database to discover real triggers
 * via pg_trigger. Otherwise, falls back to static analysis of CREATE TRIGGER
 * statements found in the SQL.
 */
export declare function analyzeCascade(sql: string, dbUrl?: string): Promise<CascadeResult[]>;
//# sourceMappingURL=analyze.d.ts.map