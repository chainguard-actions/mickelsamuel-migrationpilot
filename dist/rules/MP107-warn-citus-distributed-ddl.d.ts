/**
 * MP107: warn-citus-distributed-ddl
 *
 * ALTER TABLE on a Citus distributed table. Citus propagates the statement to
 * every shard on every worker, so one line in the migration becomes a lock on
 * the coordinator plus a lock per shard across the cluster.
 *
 * Production-context rule: silent without --database-url. Whether a table is
 * distributed is only knowable from the Citus catalog.
 */
import type { Rule } from './engine.js';
export declare const warnCitusDistributedDdl: Rule;
//# sourceMappingURL=MP107-warn-citus-distributed-ddl.d.ts.map