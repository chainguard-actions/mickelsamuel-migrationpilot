/**
 * Renderers for `migrationpilot plan-fix`.
 *
 * The text form is meant to be read top to bottom and copied step by step;
 * the JSON form is the same data for tooling.
 */
import type { PlanFixReport } from './plan-fix.js';
/** Format a plan-fix report for the terminal. */
export declare function formatPlanFix(report: PlanFixReport): string;
/** Format a plan-fix report as JSON. */
export declare function formatPlanFixJson(report: PlanFixReport): string;
//# sourceMappingURL=plan-fix-format.d.ts.map