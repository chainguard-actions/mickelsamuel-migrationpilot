export interface ParsedStatement {
    stmt: Record<string, unknown>;
    /**
     * Raw `stmt_location` from libpg-query: the offset just past the previous
     * statement's `;`, so the span it opens includes the blank lines and comments
     * written above the statement. Use `startOffset` to point at the statement.
     */
    stmtLocation: number;
    stmtLen?: number;
    /** Offset of the statement's first real token, leading trivia skipped. */
    startOffset: number;
    /** 1-based line of `startOffset` in the original file. */
    line: number;
    originalSql: string;
}
export interface ParseResult {
    statements: ParsedStatement[];
    errors: ParseError[];
}
export interface ParseError {
    message: string;
    cursorPosition?: number;
    line?: number;
}
export declare function parseMigration(sql: string): Promise<ParseResult>;
//# sourceMappingURL=parse.d.ts.map