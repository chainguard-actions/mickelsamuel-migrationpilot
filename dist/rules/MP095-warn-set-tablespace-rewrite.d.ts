import type { Rule } from './engine.js';
/**
 * MP095: warn-set-tablespace-rewrite
 *
 * SET TABLESPACE physically copies every file belonging to the relation to
 * the new location, holding ACCESS EXCLUSIVE for the entire copy. Duration is
 * a function of table size and disk throughput, and the table is unavailable
 * for reads and writes the whole time.
 *
 * It also needs enough free space to hold both copies at once, since the old
 * files are not removed until the move commits.
 */
export declare const warnSetTablespaceRewrite: Rule;
//# sourceMappingURL=MP095-warn-set-tablespace-rewrite.d.ts.map