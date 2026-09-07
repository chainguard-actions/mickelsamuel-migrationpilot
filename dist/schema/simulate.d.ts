/**
 * Schema state simulation.
 *
 * Simulates what the schema will look like after applying a sequence of
 * migration SQL statements, without actually running them against a database.
 *
 * Parses SQL using regex-based extraction and processes CREATE TABLE,
 * ALTER TABLE, CREATE INDEX, DROP TABLE, CREATE SEQUENCE, and other DDL
 * statements to build up a complete in-memory schema state.
 */
export interface ColumnState {
    /** Column name. */
    name: string;
    /** Column data type (e.g. "integer", "text", "varchar(255)"). */
    type: string;
    /** Whether the column allows NULL values. */
    nullable: boolean;
    /** Whether the column has a DEFAULT expression. */
    hasDefault: boolean;
}
export interface TableState {
    /** Table name. */
    name: string;
    /** Column definitions. */
    columns: ColumnState[];
    /** Schema name (e.g. "public"). */
    schema?: string;
}
export interface IndexState {
    /** Index name. */
    name: string;
    /** Table the index belongs to. */
    table: string;
    /** Columns included in the index. */
    columns: string[];
    /** Whether this is a unique index. */
    unique: boolean;
    /** Whether the index was created with CONCURRENTLY. */
    concurrent: boolean;
}
export interface ConstraintState {
    /** Constraint name. */
    name: string;
    /** Table the constraint belongs to. */
    table: string;
    /** Constraint type (PRIMARY KEY, UNIQUE, CHECK, FOREIGN KEY, EXCLUDE). */
    type: string;
    /** Columns involved in the constraint. */
    columns: string[];
}
export interface SequenceState {
    /** Sequence name. */
    name: string;
    /** Sequence data type (smallint, integer, bigint). */
    dataType: string;
    /** Table.column that owns this sequence, if any. */
    ownedBy?: string;
}
export interface SchemaState {
    /** All tables keyed by qualified name. */
    tables: Map<string, TableState>;
    /** All indexes keyed by name. */
    indexes: Map<string, IndexState>;
    /** All constraints keyed by name. */
    constraints: Map<string, ConstraintState>;
    /** All sequences keyed by name. */
    sequences: Map<string, SequenceState>;
}
/**
 * Simulate the schema state that results from applying a series of SQL
 * statements in order. Each statement is parsed and its effects are applied
 * to the in-memory schema.
 *
 * @param sqlStatements - Array of SQL strings to process in order.
 * @returns The resulting schema state.
 */
export declare function simulateSchema(sqlStatements: string[]): SchemaState;
/**
 * Async variant that uses libpg-query for more accurate parsing.
 * Falls back to regex-based parsing on failure.
 */
export declare function simulateSchemaAsync(sqlStatements: string[]): Promise<SchemaState>;
//# sourceMappingURL=simulate.d.ts.map