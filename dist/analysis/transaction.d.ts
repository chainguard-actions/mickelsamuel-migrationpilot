/**
 * Transaction boundary analysis for MigrationPilot.
 *
 * Tracks which statements are inside explicit transactions (BEGIN/COMMIT)
 * and which are in autocommit mode. This context is used to:
 * - Warn about CONCURRENTLY inside transactions (always fails)
 * - Calculate total lock hold duration within a transaction
 * - Detect statements that should NOT be in a transaction
 */
export interface TransactionBlock {
    /** Index of the BEGIN statement */
    beginIndex: number;
    /** Index of the COMMIT/ROLLBACK statement (-1 if unterminated) */
    endIndex: number;
    /** Indices of DDL statements inside this transaction */
    ddlIndices: number[];
    /** Indices of statements that cannot run in transactions */
    invalidInTxIndices: number[];
    /** Line number of BEGIN */
    beginLine: number;
}
export interface TransactionContext {
    /** All detected transaction blocks */
    blocks: TransactionBlock[];
    /** Map from statement index to its enclosing transaction block (if any) */
    statementToBlock: Map<number, TransactionBlock>;
}
/**
 * Strip leading SQL comments from a statement's text.
 *
 * The parser reports `stmt_location` at the end of the *previous* statement, so
 * any comment written above a statement is part of that statement's text. A
 * migration that opens with `-- add an index` hands us `"-- add an index\nBEGIN"`
 * rather than `"BEGIN"`, and every textual test for a transaction keyword misses.
 * Both comment forms are handled, and block comments nest, as they do in
 * PostgreSQL.
 */
export declare function stripLeadingComments(sql: string): string;
/**
 * Is this statement `BEGIN` / `START TRANSACTION`?
 *
 * The parse tree is the authority: `TransactionStmt.kind` says so regardless of
 * how the statement was written or commented. The textual test is only a
 * fallback for callers that hold raw SQL and no parse tree.
 */
export declare function isTransactionBegin(stmt: Record<string, unknown> | undefined, sql: string): boolean;
/** Is this statement `COMMIT` / `END` / `ROLLBACK`? Parse tree first, as above. */
export declare function isTransactionEnd(stmt: Record<string, unknown> | undefined, sql: string): boolean;
/**
 * Analyze transaction boundaries in a set of parsed statements.
 */
export declare function analyzeTransactions(statements: Array<{
    stmt: Record<string, unknown>;
    originalSql: string;
    line: number;
}>): TransactionContext;
/**
 * Check if a statement is inside a transaction block.
 */
export declare function isInTransaction(statementIndex: number, txContext: TransactionContext): boolean;
/**
 * Get the transaction block containing a statement, if any.
 */
export declare function getTransactionBlock(statementIndex: number, txContext: TransactionContext): TransactionBlock | undefined;
//# sourceMappingURL=transaction.d.ts.map