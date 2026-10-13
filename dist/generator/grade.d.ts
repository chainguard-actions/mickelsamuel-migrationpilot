/**
 * Reversibility grading.
 *
 * `rollback` answers "what is the reverse SQL?". This answers the question you
 * ask before merging: "if this goes wrong at 2am, can we get back?"
 *
 * Every statement is classified by the rollback generator itself
 * (see assessReversibility in ./rollback.ts) — this module only rolls those
 * verdicts up into one grade per migration:
 *
 * - GREEN  — every statement has an exact inverse.
 * - YELLOW — reversible with care: something the reverse cannot restore from
 *            the migration alone (an index definition, a default expression,
 *            a constraint body), but no row data is destroyed.
 * - RED    — irreversible: undoing it cannot bring the data back.
 *
 * Pure by design — no filesystem, no network — because it runs in the browser
 * playground as well as the CLI. Finding the companion down file lives in
 * ./down-file.ts.
 */
import type { Reversibility } from './rollback.js';
import type { CompanionDown } from './down-file.js';
export type ReversibilityGrade = 'GREEN' | 'YELLOW' | 'RED';
export interface ReversibilityReason {
    /** Grade contributed by this statement — `clean` statements are not listed. */
    grade: Exclude<ReversibilityGrade, 'GREEN'>;
    /** The statement, collapsed to a single line and truncated for display. */
    statement: string;
    /** Why the reversal is imperfect. */
    reason: string;
    /** Line in the migration file, when known. */
    line?: number;
}
export interface ReversibilityAssessment {
    grade: ReversibilityGrade;
    counts: {
        clean: number;
        care: number;
        irreversible: number;
    };
    /** One entry per statement that is not cleanly reversible, in file order. */
    reasons: ReversibilityReason[];
    /** Set by the CLI once the filesystem has been checked — never by the grader. */
    companionDown?: CompanionDown;
}
interface GradableStatement {
    stmt: Record<string, unknown>;
    originalSql: string;
    line?: number;
}
/**
 * Grade how reversible a parsed migration is.
 *
 * Pure: no filesystem, no network. The companion down file is resolved
 * separately by {@link resolveCompanionDown} and attached by the caller.
 */
export declare function gradeReversibility(statements: GradableStatement[]): ReversibilityAssessment;
/** Roll per-statement verdicts up into the file's grade — worst wins. */
export declare function rollUp(counts: Record<Reversibility, number>): ReversibilityGrade;
export {};
//# sourceMappingURL=grade.d.ts.map