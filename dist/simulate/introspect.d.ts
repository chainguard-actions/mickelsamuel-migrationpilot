/**
 * Catalog introspection for the simulator.
 *
 * Takes the same snapshot `src/drift/compare.ts` takes of a real database, but
 * over an already-open connection instead of a connection string, so it can be
 * pointed at the ephemeral PGlite instance. The snapshot shape is deliberately
 * identical: the diff itself is then `diffSchemas()` from the drift module,
 * which means "what this migration changed" and "what drifted between two
 * databases" are described in exactly the same vocabulary.
 */
import type { ColumnInfo, IndexInfo, ConstraintInfo } from '../drift/compare.js';
/**
 * The slice of a database client this module needs. PGlite's `query` satisfies
 * it, and so does a `pg` Client, which keeps the module testable without WASM.
 */
export interface QueryableDb {
    query<T>(sql: string, params?: unknown[]): Promise<{
        rows: T[];
    }>;
}
/**
 * Structural twin of the drift module's internal `SchemaSnapshot`. Kept as an
 * exported type here because the simulator builds snapshots directly.
 */
export interface SchemaSnapshot {
    tables: Map<string, ColumnInfo[]>;
    indexes: Map<string, IndexInfo>;
    constraints: Map<string, ConstraintInfo>;
    sequences: Set<string>;
}
/**
 * Read the current schema out of the catalog.
 */
export declare function snapshotSchema(db: QueryableDb, schemaName?: string): Promise<SchemaSnapshot>;
export interface EngineVersion {
    /** PGlite package version parsed out of `version()`, or 'unknown'. */
    pglite: string;
    /** Server version as reported, e.g. '18.3'. */
    serverVersion: string;
    /** Server major version, e.g. 18. 0 when it cannot be parsed. */
    serverMajor: number;
    /** The full, verbatim `SELECT version()` string. */
    versionString: string;
}
/**
 * Ask the engine what it actually is.
 *
 * This is not decoration. Which PostgreSQL grammar a migration is checked
 * against is a property of the PGlite build, not of anything MigrationPilot
 * chooses, and it changes when PGlite is upgraded. Reporting the parsed value
 * rather than a hardcoded one is the only way that claim stays true.
 */
export declare function detectEngineVersion(db: QueryableDb): Promise<EngineVersion>;
//# sourceMappingURL=introspect.d.ts.map