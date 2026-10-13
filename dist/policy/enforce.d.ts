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
/**
 * A rule's own severity, when known. Given one, the severity floor only stops a
 * downgrade: a rule that ships as a warning stays a warning under a critical floor.
 */
export type DefaultSeverityLookup = (ruleId: string) => Severity | undefined;
/**
 * The SQL as a pattern sees it: comments removed, every run of whitespace one
 * space, upper case. String and dollar-quoted bodies stay, since they run too.
 */
export declare function normalizeForPatternMatch(sql: string): string;
/**
 * Does normalized SQL contain this pattern? Whitespace in the pattern matches any
 * whitespace, case doesn't matter, and a pattern that starts or ends with a word
 * character only matches whole words: "DROP TABLE" doesn't match DROP TABLESPACE.
 */
export declare function matchesPattern(normalizedSql: string, pattern: string): boolean;
/** A statement a pattern matched, and the pattern. */
export interface PatternMatch {
    line: number;
    pattern: string;
}
/**
 * The statements each pattern matches, one entry per statement and pattern, in
 * statement order.
 */
export declare function findPatternStatements(statements: ReadonlyArray<{
    sql: string;
    line: number;
}>, patterns: readonly string[]): PatternMatch[];
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
/** Per-rule config, as the config file's `rules` block holds it. */
export type PolicyRuleConfig = Record<string, boolean | {
    enabled?: boolean;
    severity?: Severity;
    threshold?: number;
}>;
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
 * Find disable comments that name a required rule, or disable every rule.
 * Policy holds required rules on whatever a comment says.
 */
export declare function checkInlineDisables(sql: string, requiredRules: string[]): PolicyViolation[];
/**
 * Validate that severity overrides don't go below the organization floor.
 * Returns violations for any rules with severity below the floor.
 */
export declare function checkSeverityFloor(ruleConfig: Record<string, boolean | {
    severity?: Severity;
}>, severityFloor: Severity, defaultSeverity?: DefaultSeverityLookup): PolicyViolation[];
/**
 * Enforce all organization policies against SQL and config.
 * Returns all policy violations found.
 */
export declare function enforcePolicy(policy: PolicyConfig, sql: string, ruleConfig: Record<string, boolean | {
    enabled?: boolean;
    severity?: Severity;
}>, defaultSeverity?: DefaultSeverityLookup): PolicyViolation[];
/**
 * Apply policy enforcement to a rule config — re-enable required rules
 * and enforce severity floor. Returns the corrected config.
 */
export declare function applyPolicy(policy: PolicyConfig, ruleConfig: PolicyRuleConfig, defaultSeverity?: DefaultSeverityLookup): PolicyRuleConfig;
/**
 * Format policy violations for CLI display.
 */
export declare function formatPolicyViolations(violations: PolicyViolation[]): string[];
//# sourceMappingURL=enforce.d.ts.map