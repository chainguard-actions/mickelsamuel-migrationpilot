/**
 * Sequence overflow monitoring.
 *
 * Detects PostgreSQL sequences at risk of overflow by querying pg_sequences
 * for current values and comparing against maximum capacity. Also provides
 * static analysis of CREATE SEQUENCE statements to flag non-bigint types.
 *
 * SAFETY: Only reads from pg_sequences. Never modifies data.
 */
export interface SequenceInfo {
    /** Sequence name. */
    name: string;
    /** Sequence data type. */
    dataType: 'smallint' | 'integer' | 'bigint';
    /** Current value of the sequence. */
    currentValue: bigint;
    /** Maximum value the sequence can reach. */
    maxValue: bigint;
    /** Percentage of the sequence capacity used (0-100). */
    percentUsed: number;
    /** Estimated days until overflow, or null if insufficient data. */
    estimatedDaysLeft: number | null;
}
/**
 * Check all sequences in a PostgreSQL database for overflow risk.
 *
 * Queries pg_sequences for current values, calculates percentage used,
 * and estimates days until overflow based on recent increment patterns
 * observed from pg_stat_user_tables.
 *
 * @param dbUrl - PostgreSQL connection string.
 * @returns Array of sequence info sorted by percent used (highest first).
 */
export declare function checkSequences(dbUrl: string): Promise<SequenceInfo[]>;
/**
 * Statically analyze CREATE SEQUENCE statements for overflow risk.
 *
 * Flags sequences declared as `integer` or `smallint` (instead of `bigint`)
 * as higher risk, since they have significantly lower maximum values.
 *
 * @param sql - SQL containing CREATE SEQUENCE statements.
 * @returns Array of sequence risk assessments.
 */
export declare function analyzeSequenceFromSql(sql: string): Array<{
    name: string;
    dataType: string;
    risk: 'high' | 'medium' | 'low';
}>;
//# sourceMappingURL=monitor.d.ts.map