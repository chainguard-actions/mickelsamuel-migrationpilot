/**
 * Production context engine — queries pg_class, pg_stat_statements,
 * and pg_stat_activity for real-time table statistics and query patterns.
 *
 * Supplies the rules marked `requiresDatabaseUrl`. Without it they stay silent
 * and the analysis is static-only.
 * Production context feeds into calculateRisk() for accurate risk scoring.
 *
 * SAFETY: Only reads from pg_catalog and pg_stat views. Never reads user data.
 * Never runs DDL. All queries are SELECT-only against system catalogs.
 */
import type { TableStats, AffectedQuery } from '../scoring/score.js';
import { type CatalogContext } from './catalog.js';
export interface ProductionContext {
    tableStats: Map<string, TableStats>;
    affectedQueries: Map<string, AffectedQuery[]>;
    activeConnections: Map<string, number>;
    /**
     * Extended catalog reads — index definitions, write traffic, replication,
     * server settings, and extension-managed tables. Optional: absent when the
     * context was built by hand (tests, plugins) rather than fetched.
     */
    catalog?: CatalogContext;
}
export interface ConnectionConfig {
    connectionString: string;
    /** Connection timeout in ms (default: 5000) */
    connectTimeout?: number;
    /** Query timeout in ms (default: 10000) */
    queryTimeout?: number;
    /** SSL mode */
    ssl?: boolean | {
        rejectUnauthorized: boolean;
    };
}
/**
 * Fetches production context for the given table names.
 * Connects to the database, runs read-only catalog queries, and disconnects.
 */
export declare function fetchProductionContext(config: ConnectionConfig, tableNames: string[]): Promise<ProductionContext>;
/**
 * Lookup table stats for a specific table from the production context.
 */
export declare function getTableStats(context: ProductionContext, tableName: string): TableStats | undefined;
/**
 * Lookup affected queries for a specific table from the production context.
 */
export declare function getAffectedQueries(context: ProductionContext, tableName: string): AffectedQuery[];
/**
 * Get active connection count for a specific table.
 */
export declare function getActiveConnections(context: ProductionContext, tableName: string): number;
/**
 * Test the database connection. Returns true if successful, throws on failure.
 */
export declare function testConnection(config: ConnectionConfig): Promise<boolean>;
//# sourceMappingURL=context.d.ts.map