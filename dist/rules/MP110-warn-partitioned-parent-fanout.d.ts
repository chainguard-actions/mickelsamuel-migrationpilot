/**
 * MP110: warn-partitioned-parent-fanout
 *
 * ALTER TABLE or CREATE INDEX on a partitioned parent. The statement reads like
 * one table, but PostgreSQL takes the lock on the parent and on every partition,
 * so the real cost is the count of partitions in production.
 *
 * Production-context rule: silent without --database-url. Nothing in the
 * migration file says how many partitions the table has.
 */
import type { Rule } from './engine.js';
export declare const warnPartitionedParentFanout: Rule;
//# sourceMappingURL=MP110-warn-partitioned-parent-fanout.d.ts.map