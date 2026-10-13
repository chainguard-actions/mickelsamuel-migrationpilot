import type { Rule } from './engine.js';
/**
 * MP093: warn-default-partition-growth
 *
 * A DEFAULT partition catches every row that matches no other partition. That
 * sounds like a safety net and behaves like one right up until it isn't:
 * rows that should have gone to a partition nobody remembered to create
 * accumulate there silently, with no error and nothing in the logs.
 *
 * The cost surfaces later, at ATTACH time. Attaching the partition those rows
 * should have gone to makes PostgreSQL scan the entire DEFAULT partition to
 * prove none of them belong in the new range, under ACCESS EXCLUSIVE — and
 * if any do, the ATTACH fails and has to be cleaned up by hand.
 */
export declare const warnDefaultPartitionGrowth: Rule;
//# sourceMappingURL=MP093-warn-default-partition-growth.d.ts.map