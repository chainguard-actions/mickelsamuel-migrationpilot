/**
 * Shared choreography model for multi-step schema changes.
 *
 * A choreography is one safe way to make a change that cannot be made in a
 * single statement. It is the single source of truth behind two commands that
 * ask for the same thing from different directions:
 *
 * - `migrationpilot template <op> --table t --column c` — you name the change.
 * - `migrationpilot plan-fix <file>` — a violation names it for you.
 *
 * `template` groups the steps into its three phases (expand / migrate /
 * contract); `plan-fix` numbers them and draws the deploy boundaries. Neither
 * writes SQL of its own.
 */
export type StepDuration = 'instant' | 'seconds' | 'minutes' | 'hours';
/** Which of `template`'s three phases a step belongs to. */
export type TemplatePhase = 'expand' | 'migrate' | 'contract';
export interface ChoreographyStep {
    title: string;
    /** Runnable SQL for this step */
    sql: string;
    /** Heaviest lock the step takes */
    lock: string;
    /** What that lock blocks, in one line */
    lockNote: string;
    duration: StepDuration;
    /** false when PostgreSQL forbids this step inside a transaction block */
    transactional: boolean;
    phase: TemplatePhase;
    /** 1-based deploy this step belongs to */
    deploy: number;
}
export interface DeployBoundary {
    /** The boundary sits immediately after this step index (1-based) */
    afterStep: number;
    /** What has to ship before the following steps may run */
    reason: string;
}
export interface Choreography {
    /** Short identifier, e.g. `check-then-not-null` */
    pattern: string;
    /** Title for `template` output */
    name: string;
    /** Prose description for `template` output */
    description: string;
    /** One-paragraph summary for `plan-fix` output */
    summary: string;
    steps: ChoreographyStep[];
    boundaries: DeployBoundary[];
    notes: string[];
}
export interface ChoreographyOpts {
    table: string;
    column?: string;
    newName?: string;
    newType?: string;
    /** Type of the column being renamed, when it can be determined */
    columnType?: string;
    pgVersion?: number;
    /**
     * How a column type change ends.
     * `swap` renames the new column into the old one's place, so application
     * code never changes. `handover` moves the application across in its own
     * releases and drops the old column afterwards.
     */
    strategy?: 'swap' | 'handover';
}
/**
 * A batched loop that commits per batch and pauses between them.
 *
 * The `COMMIT` is the point. Without it the loop is one transaction: every row
 * lock is held to the end, the WAL never checkpoints, and the `pg_sleep` makes
 * it worse by extending the transaction. Transaction control inside `DO`
 * arrived in PostgreSQL 11, so before that the plan says to drive the loop from
 * outside rather than emitting SQL that errors.
 */
export declare function batchedUpdateSql(table: string, assignment: string, predicate: string, pgVersion: number): string;
export declare function batchedDeleteSql(table: string, pgVersion: number): string;
/**
 * Make a column NOT NULL without the full-table scan.
 *
 * PostgreSQL 18 stores NOT NULL in `pg_constraint`, so the constraint can be
 * added NOT VALID and validated afterwards under a lock that allows reads and
 * writes. Before that, a CHECK constraint stands in as the proof PostgreSQL
 * needs, so the final SET NOT NULL is instant. On PG < 12 that shortcut does
 * not exist and the scan is unavoidable.
 */
export declare function addNotNullChoreography(opts: ChoreographyOpts): Choreography;
/**
 * Change a column's type without rewriting the table under an exclusive lock.
 *
 * Two endings, both legitimate. `swap` renames the new column into the old
 * one's place, so application code never changes and there is no deploy
 * boundary — at the cost of a moment where the table has neither column under
 * the original name. `handover` moves the application across in its own
 * releases, which is slower but never leaves the schema mid-swap.
 */
export declare function changeTypeChoreography(opts: ChoreographyOpts): Choreography;
/**
 * Rename a column without breaking the running application.
 *
 * Two boundaries, because there is no instant at which every instance can
 * switch names at once: one release starts writing both, the next stops
 * reading the old one. The mirroring trigger has to be dropped between them.
 */
export declare function renameColumnChoreography(opts: ChoreographyOpts): Choreography;
/** Turn a whole-table UPDATE into a loop that commits and pauses. */
export declare function batchedUpdateChoreography(opts: ChoreographyOpts & {
    assignment: string;
    predicate: string;
}): Choreography;
/** Turn a whole-table DELETE into a loop, or point at TRUNCATE. */
export declare function batchedDeleteChoreography(opts: ChoreographyOpts): Choreography;
/** Build a unique index concurrently, then adopt it as the constraint. */
export declare function uniqueConstraintChoreography(opts: ChoreographyOpts & {
    constraint: string;
    columns: string[];
}): Choreography;
/** Add a constraint NOT VALID, then validate the existing rows separately. */
export declare function validateConstraintChoreography(opts: ChoreographyOpts & {
    constraint: string;
    kind: 'foreign key' | 'check';
}): Choreography;
/** Join the steps of one phase into the string `template` prints. */
export declare function renderPhase(choreography: Choreography, phase: TemplatePhase): string;
//# sourceMappingURL=choreography.d.ts.map