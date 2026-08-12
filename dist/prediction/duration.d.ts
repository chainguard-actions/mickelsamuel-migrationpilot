/**
 * Migration duration prediction.
 *
 * Estimates how long a migration will take based on the operation type
 * and optional table statistics (row count, size, index count). Uses
 * empirical heuristics derived from common PostgreSQL workloads.
 *
 * All estimates are conservative (worst-case) to help teams plan
 * maintenance windows appropriately.
 */
export interface DurationEstimate {
    /** The original SQL statement. */
    statement: string;
    /** Classified operation type (e.g. "CREATE INDEX", "ALTER TABLE ADD COLUMN"). */
    operation: string;
    /** Human-readable estimated duration (e.g. "< 1s", "1-5s", "5-15min"). */
    estimatedDuration: string;
    /** Confidence level of the estimate. */
    confidence: 'high' | 'medium' | 'low';
    /** Factors that influenced the estimate. */
    factors: string[];
}
interface TableStats {
    /** Number of rows in the table. */
    rowCount: number;
    /** Table size in bytes (including TOAST). */
    sizeBytes: number;
    /** Number of existing indexes on the table. */
    indexCount: number;
}
/**
 * Predict the duration of each DDL statement in the provided SQL.
 *
 * When `tableStats` are provided, estimates are calibrated to the actual
 * table size. Without stats, estimates are based on general heuristics
 * and confidence is lower.
 *
 * @param sql - SQL containing one or more DDL statements.
 * @param tableStats - Optional table statistics for more accurate estimates.
 * @returns Array of duration estimates, one per detected DDL statement.
 */
export declare function predictDuration(sql: string, tableStats?: TableStats): DurationEstimate[];
export {};
//# sourceMappingURL=duration.d.ts.map