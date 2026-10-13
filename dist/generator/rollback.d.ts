/**
 * Generates reverse (rollback) SQL for migration statements.
 *
 * Given a parsed migration, produces the inverse DDL operations
 * that would undo each change. Statements are reversed in order
 * (last-applied first) to respect dependencies.
 *
 * Every reversal also carries a `reversibility` verdict — how faithfully the
 * generated SQL puts the database back. That verdict is the single source of
 * truth for the reversibility grade surfaced by `analyze`/`check`
 * (see src/generator/grade.ts); the grader aggregates, it does not re-classify.
 */
import type { ParsedStatement } from '../parser/parse.js';
/**
 * How faithfully a statement can be undone.
 *
 * - `clean` — the reverse SQL restores the previous state exactly.
 * - `care` — reversible, but the reverse loses something recoverable from
 *   elsewhere: an index definition, a default expression, a constraint body.
 * - `irreversible` — undoing it destroys or cannot restore row data.
 */
export type Reversibility = 'clean' | 'care' | 'irreversible';
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
    /** How faithfully this statement can be undone */
    reversibility: Reversibility;
    /** Why the reversal is imperfect — set for `care` and `irreversible` */
    reason?: string;
}
/**
 * Generate rollback SQL for a list of parsed statements.
 * Returns statements in reverse order (undo last change first).
 */
export declare function generateRollback(stmts: ParsedStatement[]): RollbackResult;
/**
 * Classify a single statement's reversibility without generating SQL.
 *
 * Delegates to the same reversal logic `generateRollback` uses, so the grade
 * and the generated down-migration can never disagree.
 */
export declare function assessReversibility(stmt: Record<string, unknown>, originalSql: string): {
    reversibility: Reversibility;
    reason?: string;
};
/**
 * Format rollback SQL as a complete migration file.
 */
export declare function formatRollbackSql(result: RollbackResult): string;
//# sourceMappingURL=rollback.d.ts.map