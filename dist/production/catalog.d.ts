/**
 * Extended catalog reads — index definitions, write traffic, partitioning,
 * replication state, server settings, and extension-managed tables
 * (TimescaleDB, Citus, pg_partman).
 *
 * This is the data behind the catalog-aware rules (MP100-MP108, MP110-MP112).
 * Everything here is optional: each query is independently guarded so a missing
 * view, a missing extension, or a permission error degrades that one field to
 * undefined instead of failing the whole analysis. Rules that depend on a field
 * stay silent when it is absent, which is what happens on every run without
 * --database-url.
 *
 * SAFETY: identical contract to context.ts — SELECT-only against pg_catalog,
 * pg_stat_* views, and the extensions' own metadata tables. Never reads user data.
 */
import type pg from 'pg';
/** One existing index on a target table, as PostgreSQL describes it. */
export interface ExistingIndex {
    tableName: string;
    indexName: string;
    /** Access method name: btree, hash, gin, gist, brin, hnsw, ivfflat, ... */
    method: string;
    isUnique: boolean;
    isPrimary: boolean;
    /**
     * True when a constraint owns this index (pg_constraint.conindid points at
     * it), which is what makes `DROP INDEX` fail with "cannot drop index ...
     * because constraint ... requires it".
     *
     * This is not the same thing as `isUnique`. A plain `CREATE UNIQUE INDEX`
     * is unique and drops fine; only an index adopted by a UNIQUE or PRIMARY KEY
     * constraint refuses. Verified on PostgreSQL 18.3.
     */
    isConstraintBacked: boolean;
    /** True when the index has a WHERE clause. */
    isPartial: boolean;
    /**
     * Key column expressions in index order, as rendered by pg_get_indexdef().
     * A plain column is just its name; an expression index renders the expression.
     * INCLUDE columns are excluded — only key columns appear here.
     */
    keyColumns: string[];
    definition: string;
}
/** Write traffic and shape for a target table. */
export interface TableFacts {
    tableName: string;
    /** pg_class.relkind — 'r' ordinary table, 'p' partitioned table. */
    relKind: string;
    /** Number of direct children (partitions). 0 for a non-partitioned table. */
    partitionCount: number;
    /** Cumulative counters from pg_stat_user_tables. */
    inserts: number;
    updates: number;
    deletes: number;
    liveTuples: number;
    /**
     * Seconds the cumulative counters cover, derived from
     * pg_stat_database.stats_reset. Undefined when the server reports no reset
     * time (never reset, or a build that does not track it), in which case the
     * counters are totals over an unknown window and must not be turned into rates.
     */
    windowSeconds?: number;
}
/** What an extension knows about a target table. */
export interface TableExtensionInfo {
    tableName: string;
    /** TimescaleDB hypertable. */
    isHypertable: boolean;
    chunkCount?: number;
    /** True when the hypertable has compression / columnstore enabled. */
    compressionEnabled?: boolean;
    /** The hypertable's primary time dimension column, when the server reports it. */
    timeColumn?: string;
    /** Citus distributed table. */
    isCitusDistributed: boolean;
    citusDistributionColumn?: string;
    citusShardCount?: number;
    /** pg_partman-managed partition parent. */
    isPartmanParent: boolean;
    partmanControlColumn?: string;
    partmanInterval?: string;
    partmanPremake?: number;
    partmanRetention?: string;
}
/** Streaming replication state of the cluster. */
export interface ReplicationInfo {
    /** Connected standbys visible in pg_stat_replication. */
    replicaCount: number;
    /** Replication slots defined on this server. */
    slotCount: number;
    /**
     * Largest replay lag in bytes across connected standbys. Undefined when the
     * connected role cannot read the LSN columns (needs pg_monitor / pg_read_all_stats).
     */
    maxLagBytes?: number;
}
/** Disk headroom, when the server can report it. */
export interface DiskInfo {
    /**
     * Free bytes on the default tablespace.
     *
     * Core PostgreSQL has no function for this (pg_tablespace_avail() has been
     * proposed but is not in a released version as of PG18), so this is normally
     * undefined. It is populated when the server defines a
     * pg_tablespace_avail(name) -> bigint function — MigrationPilot feature-detects
     * it so operators who add their own can get headroom numbers in MP102.
     */
    availableBytes?: number;
}
/** Server settings that change how long an operation takes. */
export interface ServerSettings {
    maintenanceWorkMemBytes?: number;
    maxParallelMaintenanceWorkers?: number;
}
/** Everything the catalog-aware rules read beyond the core table stats. */
export interface CatalogContext {
    /** Existing indexes, keyed by table name. */
    indexes: Map<string, ExistingIndex[]>;
    /** Write traffic and partition shape, keyed by table name. */
    tableFacts: Map<string, TableFacts>;
    /** Extension-managed table info, keyed by table name. Only tables an extension owns appear. */
    extensionTables: Map<string, TableExtensionInfo>;
    /** Names of installed extensions (pg_extension.extname). */
    installedExtensions: Set<string>;
    replication?: ReplicationInfo;
    disk?: DiskInfo;
    settings?: ServerSettings;
}
/** An empty catalog — what rules see when no database is reachable. */
export declare function emptyCatalogContext(): CatalogContext;
/**
 * Reads the extended catalog for the given tables.
 *
 * Never throws: every query is guarded, so a partially-readable server still
 * returns whatever it could answer.
 */
export declare function fetchCatalogContext(pool: pg.Pool, tableNames: string[]): Promise<CatalogContext>;
/**
 * Converts a pg_settings value + unit pair to bytes.
 * Units look like 'kB', '8kB', 'MB', 'B' — a multiplier followed by a size.
 */
export declare function settingToBytes(setting: string, unit: string | null): number | undefined;
/** part_config.parent_table is schema-qualified; rules match on the bare name. */
export declare function bareTableName(qualified: string): string;
/** Lookup helper mirroring getTableStats() in context.ts. */
export declare function getExistingIndexes(catalog: CatalogContext | undefined, tableName: string): ExistingIndex[] | undefined;
/** Lookup helper mirroring getTableStats() in context.ts. */
export declare function getTableFacts(catalog: CatalogContext | undefined, tableName: string): TableFacts | undefined;
/** Lookup helper mirroring getTableStats() in context.ts. */
export declare function getTableExtensions(catalog: CatalogContext | undefined, tableName: string): TableExtensionInfo | undefined;
//# sourceMappingURL=catalog.d.ts.map