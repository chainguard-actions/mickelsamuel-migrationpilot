/**
 * MP109: require-vector-index-params
 *
 * A pgvector HNSW or IVFFlat index created without tuning parameters. Both
 * access methods have build-time parameters that decide recall, and both are
 * expensive to rebuild once the table is large — the defaults are a starting
 * point, not a choice.
 *
 * Static rule: works from the migration file alone. When production context is
 * available it also computes the row-count-derived starting value for IVFFlat.
 */
import type { Rule } from './engine.js';
export declare const requireVectorIndexParams: Rule;
//# sourceMappingURL=MP109-require-vector-index-params.d.ts.map