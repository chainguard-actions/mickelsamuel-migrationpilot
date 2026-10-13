/**
 * MP102: warn-rewrite-disk-headroom
 *
 * A full-rewrite operation needs room for a second copy of the table before the
 * old one goes away. On a large table that briefly doubles disk usage, and
 * running out of space mid-rewrite leaves the operation to roll back after
 * hours of work.
 *
 * Production-context rule: silent without --database-url, because the size comes
 * from the catalog.
 */
import type { Rule } from './engine.js';
export declare const warnRewriteDiskHeadroom: Rule;
//# sourceMappingURL=MP102-warn-rewrite-disk-headroom.d.ts.map