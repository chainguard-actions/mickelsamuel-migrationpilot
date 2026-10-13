/**
 * Expand-contract planner.
 *
 * Some violations have no one-line fix. Making a column NOT NULL safely is
 * four statements; changing a column's type is a new column, a sync trigger, a
 * batched backfill, application releases, and only then a drop. `--fix`
 * refuses to touch those, and this is what it hands you instead: a numbered
 * plan where every step is runnable SQL, carries its own lock note, and sits
 * on the correct side of a deploy boundary.
 *
 * None of the SQL is written here. The choreographies live in
 * `src/templates/choreography.ts`, shared with `migrationpilot template` —
 * that command takes the change from you as flags, this one reads it off a
 * violation. This module is the violation-to-choreography mapping: it pulls
 * the table, column and target type off the AST and picks the pattern.
 *
 * A deploy boundary is a point where the database cannot move on until the
 * application has shipped. Steps inside one deploy can all run in the same
 * migration; steps across a boundary cannot.
 */
import type { RuleViolation } from '../rules/engine.js';
import type { ParsedStatement } from '../parser/parse.js';
import type { ChoreographyStep, DeployBoundary } from '../templates/choreography.js';
export type { DeployBoundary } from '../templates/choreography.js';
export type { StepDuration } from '../templates/choreography.js';
/** A choreography step, numbered for display. */
export interface PlanFixStep extends ChoreographyStep {
    /** 1-based step number within the plan */
    number: number;
}
export interface FixPlan {
    ruleId: string;
    ruleName: string;
    line: number;
    /** Short identifier for the choreography, e.g. `check-then-not-null` */
    pattern: string;
    title: string;
    summary: string;
    steps: PlanFixStep[];
    boundaries: DeployBoundary[];
    notes: string[];
    /**
     * Other rules on the same statement that this plan also resolves.
     * MP002 and MP018 both flag a bare SET NOT NULL, and one plan clears both.
     */
    alsoResolves: string[];
}
export interface UnplannedViolation {
    ruleId: string;
    line: number;
    message: string;
    /** `mechanical` (run --fix) or `unfixable` (needs a human) */
    fixClass: string;
}
export interface PlanFixReport {
    file: string;
    pgVersion: number;
    plans: FixPlan[];
    unplanned: UnplannedViolation[];
}
/** Rules `plan-fix` can emit a choreography for. */
export declare const PLANNABLE_RULE_IDS: ReadonlySet<string>;
export declare function isPlannable(ruleId: string): boolean;
/**
 * Build expand-contract plans for every violation that has one.
 *
 * `statements` must be the parsed statements of the file, in file order — the
 * planner matches a violation to its statement by line and reads the details
 * (table, column, target type) off the AST rather than off the message text.
 */
export declare function buildPlanFixReport(file: string, statements: Array<ParsedStatement & {
    line: number;
}>, violations: RuleViolation[], pgVersion: number, fixClassOf: (ruleId: string) => string): PlanFixReport;
//# sourceMappingURL=plan-fix.d.ts.map