import type { RuleContext } from './engine.js';
export { isTransactionBegin, isTransactionEnd } from '../analysis/transaction.js';
/**
 * Check if the current statement is inside a BEGIN...COMMIT transaction block.
 * Walks backwards through preceding statements looking for BEGIN or COMMIT/ROLLBACK.
 *
 * Detection reads the parse tree, not the statement text: a comment written
 * above `BEGIN` becomes part of that statement's text, and matching the text
 * against the keyword used to silence every rule downstream of this one.
 */
export declare function isInsideTransaction(ctx: RuleContext): boolean;
/**
 * Index of the `BEGIN` opening the block this statement sits in, or -1 when the
 * statement runs in autocommit.
 */
export declare function enclosingBeginIndex(ctx: RuleContext): number;
/** As above, addressed by position rather than by the current statement. */
export declare function enclosingBeginIndexAt(statements: Array<{
    stmt: Record<string, unknown>;
    originalSql: string;
}>, index: number): number;
/**
 * The first function in `names` appearing anywhere in the expression, labelled
 * as it would be written: `gen_random_uuid()`, or `CURRENT_TIMESTAMP`.
 *
 * Walking the tree is what makes this correct. Matching function names against
 * the serialised JSON instead reported `gen_random_uuid()` as `random()`, since
 * one name contains the other, and printed the wrong function in every finding
 * about a UUID default. It also fires on text that is not a call at all:
 * `SET DEFAULT 'nowhere'` matched `now`, and a column named `random` matched
 * `random`. Only a `FuncCall` or a `SQLValueFunction` counts here.
 */
export declare function findFunction(node: unknown, names: Set<string>): string | null;
/**
 * Check if a statement is a DDL operation (schema-modifying).
 */
export declare function isDDL(stmt: Record<string, unknown>): boolean;
//# sourceMappingURL=helpers.d.ts.map