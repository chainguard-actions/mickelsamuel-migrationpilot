/**
 * The Org plan's policy, applied to one run.
 *
 * A valid paid license key turns on two parts of the config: the `policy` block
 * and the audit log. With it, the policy holds on every path a gate takes:
 * required rules run whatever the config, a preset, --exclude or a disable
 * comment says, the severity floor stops a downgrade, and a blocked pattern
 * fails the run. Without it, neither part applies and the run says so once,
 * rather than quietly doing less than the config asks.
 */
import type { MigrationPilotConfig } from '../config/load.js';
import type { Rule, RuleViolation } from '../rules/engine.js';
import type { PatternMatch } from './enforce.js';
export interface OrgPolicy {
    /** The config the run uses: the policy applied to its rules when the policy is on. */
    config: MigrationPilotConfig;
    /** True when a valid key turned the policy block and the audit log on. */
    entitled: boolean;
    /** Rules the policy holds on. Empty when the policy is off. */
    requiredRules: ReadonlySet<string>;
    /** Patterns that fail the run. Empty when the policy is off. */
    blockedPatterns: readonly string[];
    /** Patterns the run flags for team review. Empty when the policy is off. */
    reviewPatterns: readonly string[];
    /** The audit log settings to configure: undefined when the log is off. */
    auditLog: MigrationPilotConfig['auditLog'];
    /** Something in the config isn't being applied. Shown on every run, quiet or not. */
    warnings: string[];
    /** What the policy changed from what the config asked for. */
    notes: string[];
}
/**
 * Work out what the config's Org features do on this run.
 *
 * @param licenseKey - The key the run was given, if any; the
 *   MIGRATIONPILOT_LICENSE_KEY environment variable is read when it is empty.
 * @param keyHint - Where a key goes, for the message when one is missing.
 */
export declare function resolveOrgPolicy(config: MigrationPilotConfig, licenseKey: string | undefined, keyHint: string): OrgPolicy;
/**
 * Drop excluded rules, except the ones the policy holds on.
 *
 * @returns The rules to run, and the excluded ids the policy kept.
 */
export declare function excludeRules(rules: Rule[], exclude: Iterable<string>, org: OrgPolicy): {
    rules: Rule[];
    kept: string[];
};
/** The note for excluded rules the policy kept, or undefined when it kept none. */
export declare function keptByPolicyNote(kept: string[], flag: string): string | undefined;
/**
 * Notes for the disable comments the policy overrode: a required rule's
 * violation that a comment would have switched off.
 */
export declare function overriddenDisableNotes(sql: string, violations: readonly RuleViolation[], statementLines: number[], org: OrgPolicy): string[];
/** Statements that match a blocked pattern. Empty when the policy is off. */
export declare function blockedStatements(statements: ReadonlyArray<{
    sql: string;
    line: number;
}>, org: OrgPolicy): PatternMatch[];
/** Statements that match a review pattern. Empty when the policy is off. */
export declare function reviewStatements(statements: ReadonlyArray<{
    sql: string;
    line: number;
}>, org: OrgPolicy): PatternMatch[];
/** What a blocked statement's report says, without the file and line. */
export declare function blockedMessage(m: PatternMatch): string;
/** What a review statement's report says, without the file and line. */
export declare function reviewMessage(m: PatternMatch): string;
/** One line for a blocked statement, in the file:line: form the CLI prints. */
export declare function formatBlocked(file: string, m: PatternMatch): string;
/** One line for a statement that needs team review. */
export declare function formatReview(file: string, m: PatternMatch): string;
//# sourceMappingURL=org.d.ts.map