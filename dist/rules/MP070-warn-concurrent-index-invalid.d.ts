import type { Rule } from './engine.js';
/**
 * MP070: warn-concurrent-index-invalid
 *
 * CREATE INDEX CONCURRENTLY can fail and leave an INVALID index behind.
 * Before retrying, you must DROP the invalid index. Without a preceding
 * DROP INDEX IF EXISTS, a retry will fail with "index already exists".
 *
 * Best practice: always include DROP INDEX IF EXISTS before
 * CREATE INDEX CONCURRENTLY to handle retries cleanly.
 *
 * IF NOT EXISTS is not a substitute and this rule used to accept it as one.
 * It matches by name, and an invalid index has the name — so the statement
 * skips the build, returns the `CREATE INDEX` success tag, and the migration
 * runner marks the migration applied over an index that will never answer a
 * query. There is no error and nothing in the deploy log. MPH-012 verifies it
 * on PostgreSQL 17.10, and `bench/corpus/unsafe/u13` is the benchmark case
 * this exemption made MigrationPilot miss.
 *
 * With one exception, which MPH-012 spells out and this rule used to walk
 * straight into: an index owned by a UNIQUE or PRIMARY KEY constraint cannot be
 * dropped at all. `DROP INDEX CONCURRENTLY IF EXISTS` on one is rejected with
 * "cannot drop index ... because constraint ... requires it" — verified on
 * PostgreSQL 18.3 — so demanding the drop there asks for a migration that
 * cannot run, and MP097 objects to the result. The repair path for a
 * constraint-backed index is REINDEX INDEX CONCURRENTLY instead.
 */
export declare const warnConcurrentIndexInvalid: Rule;
//# sourceMappingURL=MP070-warn-concurrent-index-invalid.d.ts.map