/**
 * Policy enforcement for MigrationPilot Enterprise.
 *
 * Allows organizations to enforce:
 * - Required rules that cannot be disabled by individual devs
 * - Minimum severity floors (rules can't be downgraded below org minimum)
 * - Blocked operations (DDL patterns that are never allowed)
 * - Required review for certain migration patterns
 *
 * Config in .migrationpilotrc.yml:
 *
 * policy:
 *   requiredRules:
 *     - MP001
 *     - MP004
 *     - MP008
 *   severityFloor: warning
 *   blockedPatterns:
 *     - "DROP TABLE"
 *     - "TRUNCATE"
 *   requireReviewPatterns:
 *     - "ALTER TYPE"
 *     - "DROP COLUMN"
 */
import type { Severity } from '../rules/engine.js';
export interface PolicyConfig {
    /** Rules that must always be enabled — cannot be disabled via config or inline comments */
    requiredRules?: string[];
    /** Minimum severity — rules cannot be downgraded below this level */
    severityFloor?: Severity;
    /** SQL patterns that are completely blocked (analysis fails immediately) */
    blockedPatterns?: string[];
    /** SQL patterns that require explicit team review before proceeding */
    requireReviewPatterns?: string[];
}
export interface PolicyViolation {
    type: 'blocked_pattern' | 'disabled_required_rule' | 'severity_downgrade' | 'requires_review';
    message: string;
    pattern?: string;
    ruleId?: string;
}
/**
 * Validate SQL against organization policy blocked patterns.
 * Returns violations for any matched blocked patterns.
 */
export declare function checkBlockedPatterns(sql: string, blockedPatterns: string[]): PolicyViolation[];
/**
 * Validate SQL against patterns that require review.
 * Returns violations (as warnings) for matched patterns.
 */
export declare function checkReviewPatterns(sql: string, reviewPatterns: string[]): PolicyViolation[];
/**
 * Validate that a rule configuration doesn't disable required rules.
 * Returns violations for any required rules that were disabled.
 */
export declare function checkRequiredRules(ruleConfig: Record<string, boolean | {
    enabled?: boolean;
}>, requiredRules: string[]): PolicyViolation[];
/**
 * Validate that severity overrides don't go below the organization floor.
 * Returns violations for any rules with severity below the floor.
 */
export declare function checkSeverityFloor(ruleConfig: Record<string, boolean | {
    severity?: Severity;
}>, severityFloor: Severity): PolicyViolation[];
/**
 * Enforce all organization policies against SQL and config.
 * Returns all policy violations found.
 */
export declare function enforcePolicy(policy: PolicyConfig, sql: string, ruleConfig: Record<string, boolean | {
    enabled?: boolean;
    severity?: Severity;
}>): PolicyViolation[];
/**
 * Apply policy enforcement to a rule config — re-enable required rules
 * and enforce severity floor. Returns the corrected config.
 */
export declare function applyPolicy(policy: PolicyConfig, ruleConfig: Record<string, boolean | {
    enabled?: boolean;
    severity?: Severity;
}>): Record<string, boolean | {
    enabled?: boolean;
    severity?: Severity;
}>;
/**
 * Format policy violations for CLI display.
 */
export declare function formatPolicyViolations(violations: PolicyViolation[]): string[];
//# sourceMappingURL=enforce.d.ts.map