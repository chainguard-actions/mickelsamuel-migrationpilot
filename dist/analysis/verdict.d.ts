/**
 * Shared fail-threshold gate for MigrationPilot.
 *
 * One source of truth for "does this set of violations fail the build?".
 * The CLI turns it into an exit code; the MCP `check_before_apply` tool turns
 * it into a pass/fail verdict an agent can act on. Both must agree — a
 * guardrail that blocks in CI but waves the same migration through in an
 * editor is worse than no guardrail at all.
 */
import type { RuleViolation, Severity } from '../rules/engine.js';
export type FailOnThreshold = 'critical' | 'warning' | 'never' | 'irreversible';
export type Verdict = 'pass' | 'fail';
/**
 * Coerce an arbitrary string to a valid threshold, falling back to `critical`.
 */
export declare function normalizeFailOn(value: string | undefined | null): FailOnThreshold;
/**
 * Compute the process exit code for a set of violations.
 * 0 = clean, 1 = warnings (when failOn is `warning`), 2 = critical violations.
 *
 * `irreversible` is `critical` plus one extra gate: a migration graded RED
 * with no companion down file (`ungatedIrreversible > 0`) also exits 2. It is
 * a superset on purpose — a CI knob that silently stopped failing on critical
 * violations would be a trap.
 */
export declare function computeExitCode(failOn: string, violations: RuleViolation[], ungatedIrreversible?: number): number;
/**
 * Whether a single violation's severity is blocking at the given threshold.
 */
export declare function isBlocking(severity: Severity, failOn: string): boolean;
/**
 * Pass/fail verdict for a set of violations at the given threshold.
 */
export declare function computeVerdict(failOn: string, violations: RuleViolation[]): Verdict;
//# sourceMappingURL=verdict.d.ts.map