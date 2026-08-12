/**
 * Schema drift detection — compares two PostgreSQL schemas via information_schema.
 *
 * Usage: migrationpilot drift --source <url1> --target <url2>
 *
 * Compares tables, columns, indexes, constraints, and sequences between
 * two databases. Reports additions, removals, and modifications.
 *
 * SAFETY: Only reads from information_schema and pg_catalog. Never modifies data.
 */
export interface SchemaDiff {
    tables: {
        added: string[];
        removed: string[];
        modified: TableDiff[];
    };
    indexes: {
        added: IndexInfo[];
        removed: IndexInfo[];
    };
    sequences: {
        added: string[];
        removed: string[];
    };
}
export interface TableDiff {
    table: string;
    columns: {
        added: ColumnInfo[];
        removed: ColumnInfo[];
        modified: ColumnChange[];
    };
    constraints: {
        added: ConstraintInfo[];
        removed: ConstraintInfo[];
    };
}
export interface ColumnInfo {
    name: string;
    dataType: string;
    nullable: boolean;
    defaultValue: string | null;
}
export interface ColumnChange {
    name: string;
    changes: string[];
}
export interface IndexInfo {
    name: string;
    table: string;
    definition: string;
}
export interface ConstraintInfo {
    name: string;
    table: string;
    type: string;
    definition: string;
}
interface SchemaSnapshot {
    tables: Map<string, ColumnInfo[]>;
    indexes: Map<string, IndexInfo>;
    constraints: Map<string, ConstraintInfo>;
    sequences: Set<string>;
}
/**
 * Compare two database schemas and return the differences.
 */
export declare function compareSchemas(sourceUrl: string, targetUrl: string, schema?: string): Promise<SchemaDiff>;
/**
 * Compare two schema snapshots (pure function, no I/O).
 * Exported for testing.
 */
export declare function diffSchemas(source: SchemaSnapshot, target: SchemaSnapshot): SchemaDiff;
/**
 * Format drift report as a readable string.
 */
export declare function formatDriftReport(diff: SchemaDiff): string;
export {};
//# sourceMappingURL=compare.d.ts.map