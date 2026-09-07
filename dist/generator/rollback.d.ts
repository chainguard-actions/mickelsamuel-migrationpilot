/**
 * Generates reverse (rollback) SQL for migration statements.
 *
 * Given a parsed migration, produces the inverse DDL operations
 * that would undo each change. Statements are reversed in order
 * (last-applied first) to respect dependencies.
 */
import type { ParsedStatement } from '../parser/parse.js';
export interface RollbackResult {
    /** Reversed SQL statements in correct undo order */
    statements: RollbackStatement[];
    /** Statements that could not be auto-reversed */
    warnings: string[];
}
export interface RollbackStatement {
    /** The reverse SQL */
    sql: string;
    /** What the original statement did */
    originalDescription: string;
}
/**
 * Generate rollback SQL for a list of parsed statements.
 * Returns statements in reverse order (undo last change first).
 */
export declare function generateRollback(stmts: ParsedStatement[]): RollbackResult;
/**
 * Format rollback SQL as a complete migration file.
 */
export declare function formatRollbackSql(result: RollbackResult): string;
//# sourceMappingURL=rollback.d.ts.map