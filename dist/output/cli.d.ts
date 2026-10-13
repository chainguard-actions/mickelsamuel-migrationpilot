import type { RiskScore } from '../scoring/score.js';
import type { Rule, RuleViolation } from '../rules/engine.js';
import type { LockClassification } from '../locks/classify.js';
import type { ReversibilityAssessment } from '../generator/grade.js';
export interface FormatOptions {
    /** Rules array for "Why this matters" + docs URL display */
    rules?: Rule[];
    /** Timing metadata for footer */
    timing?: {
        ruleCount: number;
        elapsedMs: number;
    };
}
export interface StatementResult {
    sql: string;
    /** 1-based line the statement starts on in the source file. */
    line: number;
    lock: LockClassification;
    risk: RiskScore;
    violations: RuleViolation[];
}
/** One statement a policy pattern matched. */
export interface PolicyMatch {
    line: number;
    pattern: string;
}
/** What the Org policy found in one file. */
export interface PolicyFindings {
    /** Statements that match a blocked pattern. Any one of them fails the run. */
    blocked: PolicyMatch[];
    /** Statements that match a pattern the policy sends for team review. */
    review: PolicyMatch[];
    /** What the policy changed from what the config or the file asked for. */
    notes: string[];
}
export interface AnalysisOutput {
    file: string;
    statements: StatementResult[];
    overallRisk: RiskScore;
    violations: RuleViolation[];
    /** How reversible this migration is. Populated by `analyzeSQL`. */
    reversibility?: ReversibilityAssessment;
    /** Org policy findings. Set by the caller, only when an Org key turned the policy on. */
    policy?: PolicyFindings;
}
export declare function formatCliOutput(analysis: AnalysisOutput, options?: FormatOptions): string;
/**
 * Format a summary for the `check` command when scanning multiple files.
 */
export declare function formatCheckSummary(results: AnalysisOutput[], meta?: {
    ruleCount: number;
    elapsedMs: number;
}): string;
/**
 * Render the reversibility verdict: what cannot be undone, and whether a
 * hand-written down migration exists to cover it.
 */
export declare function formatReversibilitySection(assessment: ReversibilityAssessment): string[];
/**
 * Quiet output: one line per violation, gcc-style.
 * file:line: [MPXXX] SEVERITY: message
 */
export declare function formatQuietOutput(analysis: AnalysisOutput): string;
/**
 * Verbose output: normal output plus a pass/fail summary for every rule on every statement.
 */
export declare function formatVerboseOutput(analysis: AnalysisOutput, rules: Rule[]): string;
//# sourceMappingURL=cli.d.ts.map