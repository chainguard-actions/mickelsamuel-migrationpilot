/**
 * Byte offset → line number, and where a statement actually begins.
 *
 * libpg-query reports `stmt_location` as the offset just past the previous
 * statement's `;` — not the offset of the statement itself. Everything between
 * the two sits inside the span it hands back: the newline that ended the last
 * line, any blank lines, and any comment written above the statement. Reading a
 * line number straight off `stmt_location` therefore reports every statement on
 * the line its predecessor ended on, and slicing the text off it glues the
 * file's header comments onto the first statement.
 *
 * `statementStart` is the correction: it walks past that trivia to the first
 * real token, and every position MigrationPilot reports — CLI, JSON, SARIF, PR
 * comments, the VS Code extension — is measured from there.
 */
/** Offsets at which each 1-based line begins. */
export declare function lineStartOffsets(sql: string): number[];
/**
 * 1-based line number of `offset`, given a table from `lineStartOffsets`.
 *
 * CRLF needs no special handling: `\r\n` carries exactly one `\n`, so a line
 * begins after it just as it does on Unix endings.
 */
export declare function lineAt(starts: number[], offset: number): number;
/**
 * 1-based line number of `offset` in `sql`.
 *
 * Builds the offset table on every call — fine for a one-off, but callers
 * translating several offsets should hold a `lineStartOffsets` table instead.
 */
export declare function lineOf(sql: string, offset: number): number;
/**
 * Offset of the first real token in `[from, to)`.
 *
 * Skips whitespace, `--` line comments and block comments, which nest in
 * PostgreSQL. A span holding nothing but trivia has no token to point at, so
 * `from` comes back unchanged.
 */
export declare function statementStart(sql: string, from: number, to: number): number;
//# sourceMappingURL=position.d.ts.map