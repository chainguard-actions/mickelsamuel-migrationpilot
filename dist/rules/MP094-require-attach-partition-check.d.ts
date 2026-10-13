import type { Rule } from './engine.js';
/**
 * MP094: require-attach-partition-check
 *
 * ATTACH PARTITION has to prove that every row in the table being attached
 * satisfies the partition bound. By default it proves it the slow way: a full
 * scan of the table, under ACCESS EXCLUSIVE on both the table and the parent.
 *
 * PostgreSQL will skip that scan entirely if an existing CHECK constraint
 * already implies the bound. Adding the constraint first — with NOT VALID,
 * then VALIDATE, neither of which blocks reads and writes the way ATTACH does
 * — moves the whole cost out of the lock window.
 *
 * MP072 covers the other scan ATTACH can trigger, of the DEFAULT partition.
 * This rule stays quiet when a matching CHECK is already present, so a
 * correctly written ATTACH produces no violation here.
 */
export declare const requireAttachPartitionCheck: Rule;
//# sourceMappingURL=MP094-require-attach-partition-check.d.ts.map