import type { Rule } from './engine.js';
/**
 * MP072: warn-partition-default-scan
 *
 * ALTER TABLE ... ATTACH PARTITION triggers a scan of the DEFAULT partition
 * to verify that no rows in the default partition overlap with the new
 * partition's boundary. This scan holds an ACCESS EXCLUSIVE lock on the
 * default partition for its entire duration.
 *
 * On large default partitions, this can be very slow and block all queries.
 */
export declare const warnPartitionDefaultScan: Rule;
//# sourceMappingURL=MP072-warn-partition-default-scan.d.ts.map