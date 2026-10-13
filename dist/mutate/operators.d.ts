/**
 * Mutation operators for the Guardrail Mutation Tester (experimental).
 *
 * Each operator takes ONE statement from a known-good migration and rewrites it
 * into a dangerous near-neighbour — the version a tired engineer might actually
 * write. The runner then feeds every mutant back through the normal analysis
 * pipeline using the caller's resolved config, so the question answered is not
 * "is this SQL safe?" but "would MY guardrail have stopped this?".
 *
 * Applicability is always AST-guided: an operator only fires when the parsed
 * node proves the pattern is there. The rewrite itself is either:
 *
 * - 'ast'    — the replacement statement is rebuilt from node fields
 * - 'string' — a narrow, anchored text edit on the statement (used where an AST
 *              round-trip would mean re-printing arbitrary expressions, e.g.
 *              stripping the CONCURRENTLY keyword or a trailing NOT VALID).
 *              Every string edit is anchored and verified: if the pattern does
 *              not match exactly once, the operator declines to mutate.
 *
 * `targetRules` lists the rules expected to catch the mutant. An empty list is
 * deliberate: it marks a dangerous change no built-in rule covers, which the
 * runner reports separately from config holes because no config can close it.
 */
/** A single statement of the input migration, plus the context an operator needs. */
export interface MutationTarget {
    /** Parsed statement node (libpg-query AST). */
    stmt: Record<string, unknown>;
    /** Statement SQL, leading comments and the trailing semicolon removed. */
    sql: string;
    /** Index of this statement within the migration. */
    index: number;
    /** Every statement in the migration, in order. */
    all: Array<{
        stmt: Record<string, unknown>;
        sql: string;
    }>;
    /** Target PostgreSQL version. */
    pgVersion: number;
}
/** The edit an operator wants applied to the migration. */
export interface MutationEdit {
    /** Replacement text for the target statement. An empty string deletes it. */
    sql: string;
    /**
     * Extra statement indices to delete, for operators that collapse a
     * multi-statement safe pattern (e.g. CHECK + VALIDATE + SET NOT NULL).
     */
    removes?: number[];
}
export interface MutationOperator {
    id: string;
    name: string;
    description: string;
    /** Rules expected to catch this mutant. Empty = no built-in rule covers it. */
    targetRules: string[];
    /** One-line production consequence if the mutant shipped. */
    consequence: string;
    /** How the rewrite is produced. See module docs. */
    transform: 'ast' | 'string';
    isApplicable(target: MutationTarget): boolean;
    /** Returns the edit, or null when the statement cannot be mutated cleanly. */
    mutate(target: MutationTarget): MutationEdit | null;
}
/** Every mutation operator, in a stable order. */
export declare const allOperators: MutationOperator[];
/** Look up an operator by id. */
export declare function getOperator(id: string): MutationOperator | undefined;
//# sourceMappingURL=operators.d.ts.map