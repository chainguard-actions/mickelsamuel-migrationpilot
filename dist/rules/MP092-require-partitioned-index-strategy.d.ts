import type { Rule } from './engine.js';
/**
 * MP092: require-partitioned-index-strategy
 *
 * Indexing a partitioned parent does not behave like indexing a table.
 *
 *   CREATE INDEX CONCURRENTLY idx ON parent (col);
 *   ERROR: cannot create index on partitioned table "parent" concurrently
 *
 * So the usual advice — always CONCURRENTLY — is not available here, and the
 * plain form recursively builds an index on every partition while holding
 * locks across the whole hierarchy for the entire build.
 *
 * The supported approach is CREATE INDEX ON ONLY parent (a catalog-only,
 * invalid parent index), then CREATE INDEX CONCURRENTLY per partition, then
 * ALTER INDEX ... ATTACH PARTITION to mark the parent index valid.
 *
 * "Is this a partitioned parent?" is answered from the migration itself: a
 * CREATE TABLE ... PARTITION BY, a CREATE TABLE ... PARTITION OF it, or an
 * ATTACH PARTITION onto it.
 */
export declare const requirePartitionedIndexStrategy: Rule;
//# sourceMappingURL=MP092-require-partitioned-index-strategy.d.ts.map