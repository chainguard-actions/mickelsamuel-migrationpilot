/**
 * Who owns an index — the one question MP070 and MP097 both turn on.
 *
 * A `UNIQUE` or `PRIMARY KEY` constraint owns the index enforcing it, and while
 * it does, `DROP INDEX` is refused:
 *
 *   ERROR: cannot drop index users_email_key because constraint users_email_key
 *          on table users requires it
 *
 * `IF EXISTS` does not soften it and neither does `CONCURRENTLY` — both were
 * verified against PostgreSQL 18.3, along with the counter-case: a plain
 * `CREATE UNIQUE INDEX` is not owned by anything and drops without complaint.
 *
 * So "unique" and "constraint-backed" are different properties, and guessing one
 * from the other — or from a `_key` suffix on a name — is how MP097 came to
 * raise a merge-blocking critical against a correct migration. Ownership is only
 * ever reported here when something actually says so: the production catalog, or
 * a statement in the file that adopts the index into a constraint.
 */
import type { RuleContext } from './engine.js';
export type OwnershipSource = 'catalog' | 'migration';
export interface ConstraintOwnership {
    /** Where the claim comes from. */
    source: OwnershipSource;
    /** Name of the owning constraint. */
    constraintName: string;
    /** PRIMARY KEY or UNIQUE. */
    kind: 'PRIMARY KEY' | 'UNIQUE';
    /** Table the constraint is on, when known. */
    tableName?: string;
    /** Statement index that establishes it, for the `migration` source. */
    statementIndex?: number;
}
/**
 * Does a constraint own `indexName` by the time statement `before` runs?
 *
 * Checked against the production catalog first, then against the statements
 * ahead of this one in the migration. Returns null when nothing establishes it —
 * which is the answer for every plain `CREATE UNIQUE INDEX`, and the reason this
 * function exists rather than a name-suffix test.
 */
export declare function constraintOwning(ctx: RuleContext, indexName: string, before?: number): ConstraintOwnership | null;
/**
 * Is `indexName` adopted into a constraint *after* statement `after`?
 *
 * This is the s06 shape: build the unique index concurrently, then hand it to
 * `ADD CONSTRAINT ... USING INDEX`. From that point the index cannot be dropped,
 * so the drop-first retry convention does not apply to it.
 */
export declare function adoptedLaterInMigration(ctx: RuleContext, indexName: string): ConstraintOwnership | null;
//# sourceMappingURL=index-ownership.d.ts.map