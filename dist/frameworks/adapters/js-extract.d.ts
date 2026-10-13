/**
 * Static raw-SQL extraction from JavaScript/TypeScript migrations
 * (TypeORM, Sequelize, Knex).
 *
 * These migrations are code, not SQL. Where the SQL is a plain string literal
 * — `queryRunner.query('CREATE INDEX ...')`, `knex.raw(\`ALTER TABLE ...\`)` —
 * it can be read off the page with certainty. Where it is built at runtime
 * (interpolation, variables, string concatenation, schema-builder calls), it
 * cannot, and this module says so instead of guessing.
 *
 * Only the `up` half is extracted: the down migration does not run against
 * production on the way forward.
 *
 * Extracted SQL is written back at the line where its literal started, so
 * violations point at the real line of the real .ts file.
 */
/** A SQL string literal that was read verbatim out of the source. */
export interface ExtractedStatement {
    sql: string;
    /** 1-based line of the source file where the literal starts */
    line: number;
    /** The call it came from, e.g. "queryRunner.query" */
    call: string;
}
/** A raw-SQL call whose argument could not be read statically. */
export interface DynamicCall {
    line: number;
    call: string;
    reason: string;
}
export interface JsExtraction {
    /** SQL laid out on the source file's line numbers ('' when nothing was extracted) */
    sql: string;
    statements: ExtractedStatement[];
    dynamic: DynamicCall[];
    /** True when an up() function/property was located */
    foundUp: boolean;
    /** True when the up section calls a schema-builder API instead of raw SQL */
    usesSchemaBuilder: boolean;
}
/**
 * Pull the raw SQL out of one JS/TS migration file.
 */
export declare function extractSqlFromJs(source: string): JsExtraction;
//# sourceMappingURL=js-extract.d.ts.map