/**
 * Lock queue simulation.
 *
 * Simulates the lock queue effects of DDL operations. For each DDL statement,
 * determines what PostgreSQL lock it acquires, what concurrent operations it
 * blocks, and estimates queue buildup based on active connection count and
 * average query duration.
 *
 * This helps teams understand the blast radius of their migrations and plan
 * deployment windows accordingly.
 */
export interface LockQueueResult {
    /** The PostgreSQL lock type acquired by this DDL statement. */
    ddlLockType: string;
    /** Operations that will be blocked while this DDL holds its lock. */
    blockedOperations: string[];
    /** Estimated maximum time queries will be queued. */
    maxQueueTime: string;
    /** Actionable recommendations to reduce lock impact. */
    recommendations: string[];
}
interface SimulationOpts {
    /** Number of active database connections (default: 50). */
    activeConnections?: number;
    /** Average query duration in milliseconds (default: 100). */
    avgQueryDuration?: number;
}
/**
 * Simulate the lock queue effects of DDL operations.
 *
 * For each DDL statement, determines the lock type, blocked operations,
 * and estimated queue buildup time based on connection characteristics.
 *
 * @param sql - SQL containing DDL statements.
 * @param opts - Optional simulation parameters.
 * @returns Array of lock queue results, one per DDL statement.
 */
export declare function simulateLockQueue(sql: string, opts?: SimulationOpts): LockQueueResult[];
export {};
//# sourceMappingURL=simulate.d.ts.map