/**
 * Statement splitting for the simulator.
 *
 * The primary path is the same one `src/analysis/analyze.ts` uses: parse with
 * libpg-query and slice each statement out with its `stmt_location`/`stmt_len`.
 * That is authoritative — the server's own grammar decided where the boundaries
 * are.
 *
 * The fallback matters because of a version gap. The bundled libpg-query is
 * built from PostgreSQL 16/17 and *rejects* PG18-only syntax outright, while
 * PGlite 0.5.x embeds PostgreSQL 18. So there is a real class of migration that
 * static analysis cannot parse but the simulator can execute perfectly well.
 * Refusing to run those would throw away the most interesting answer the
 * simulator has, so on parse failure we split the raw text ourselves and let
 * the actual server be the judge.
 */
export interface SplitStatement {
    /** Statement text, trimmed, without the trailing semicolon. */
    sql: string;
    /** 1-based line of the statement's first character in the source file. */
    line: number;
    /** Byte offset of the statement's first character in the source file. */
    offset: number;
    /**
     * Parse tree for the statement. Empty on the raw fallback path, where
     * libpg-query gave us nothing to work with.
     */
    stmt: Record<string, unknown>;
}
export interface SplitResult {
    statements: SplitStatement[];
    /** True when libpg-query could not parse the file and we split the raw text. */
    fallback: boolean;
    /** Parse errors from libpg-query (empty unless `fallback` is true). */
    parseErrors: string[];
}
/**
 * Split a migration into executable statements.
 */
export declare function splitStatements(sql: string): Promise<SplitResult>;
/**
 * Split raw SQL on semicolons, skipping over anything where a semicolon is not
 * a statement terminator: string literals, quoted identifiers, dollar-quoted
 * bodies (function definitions, DO blocks), line comments and nestable block
 * comments.
 *
 * Exported for testing.
 */
export declare function splitStatementsRaw(sql: string): SplitStatement[];
//# sourceMappingURL=split.d.ts.map