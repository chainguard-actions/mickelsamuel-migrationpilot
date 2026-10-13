/**
 * Output formatting for the Guardrail Mutation Tester (experimental).
 *
 * The text report leads with holes, because the holes are the point: a run that
 * catches everything is a one-line answer, a run that lets something through
 * needs to say exactly what and why.
 */
import type { MutationReport } from './runner.js';
export declare function formatMutationReport(report: MutationReport): string;
/** Machine-readable report for CI. */
export declare function formatMutationJson(report: MutationReport): string;
//# sourceMappingURL=format.d.ts.map