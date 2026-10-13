/**
 * MP100: warn-redundant-index
 *
 * A new index whose key columns are already the leading columns of an index that
 * exists in production. PostgreSQL can use the existing index for those queries,
 * so the new one costs build time, disk, and write amplification for nothing.
 *
 * Production-context rule: silent without --database-url, because the comparison
 * is against the live catalog.
 */
import type { Rule } from './engine.js';
export declare const warnRedundantIndex: Rule;
//# sourceMappingURL=MP100-warn-redundant-index.d.ts.map