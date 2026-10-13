/**
 * SQL statement splitter for the auto-fixer.
 *
 * The fixer rewrites whole statements, not single lines — an
 * `ALTER TABLE ... ADD CONSTRAINT ... FOREIGN KEY (...) REFERENCES ...`
 * routinely spans four lines, and appending `NOT VALID` to the first one
 * would produce invalid SQL.
 *
 * This is a lexer, not a parser: it walks the text tracking string
 * literals, quoted identifiers, dollar-quoted bodies and comments so that
 * only a real top-level `;` ends a statement.
 */
export interface SqlStatementSpan {
    /** 0-based position of the statement in the file */
    index: number;
    /** Offset of the first character of the statement */
    start: number;
    /** Offset one past the last character (including the terminating `;`) */
    end: number;
    /** 1-based line number of `start` */
    startLine: number;
    /** 1-based line number of the last character */
    endLine: number;
    /** `sql.slice(start, end)` */
    text: string;
}
/**
 * Split SQL into statement spans.
 *
 * Whitespace and comments between statements belong to neither statement —
 * they stay in the gaps, which lets the fixer reassemble a file byte-for-byte
 * when nothing changed.
 */
export declare function splitStatements(sql: string): SqlStatementSpan[];
//# sourceMappingURL=statements.d.ts.map