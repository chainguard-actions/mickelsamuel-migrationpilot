import type { Rule } from './engine.js';
/**
 * MP089: warn-collation-change-rewrite
 *
 * ALTER COLUMN ... TYPE ... COLLATE changes the sort order of the column,
 * which invalidates every btree index built on it — the index is ordered by
 * the old collation and PostgreSQL has to rebuild it under the same
 * ACCESS EXCLUSIVE lock as the rewrite.
 *
 * MP007 already flags the rewrite that any ALTER COLUMN TYPE causes. This
 * rule adds what is specific to collation: the index rebuilds, and the fact
 * that comparison semantics change for everything that reads the column.
 */
export declare const warnCollationChangeRewrite: Rule;
//# sourceMappingURL=MP089-warn-collation-change-rewrite.d.ts.map