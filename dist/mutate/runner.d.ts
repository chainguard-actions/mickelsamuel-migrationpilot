/**
 * Guardrail mutation runner (experimental).
 *
 * Takes migrations that already pass, generates dangerous near-neighbour
 * mutants with the operators in ./operators.ts, and re-analyses each one
 * through the same pipeline the CLI uses (parse → rules → severity overrides
 * → failOn), with the caller's resolved config.
 *
 * A mutant is CAUGHT when the mutation introduces at least one *new* violation
 * that meets the configured failOn threshold. Comparing against the baseline
 * matters: if a file already trips a rule, that pre-existing violation would
 * otherwise mark every mutant as caught and hide real holes.
 *
 * A mutant that is not caught is either:
 *   - a HOLE     — some rule would have caught it, but this config didn't
 *                  (rule disabled/excluded, severity downgraded, failOn too lax)
 *   - UNCOVERED  — no built-in rule catches it at all, so no config can fix it
 */
import type { Rule, RuleViolation, Severity } from '../rules/engine.js';
import type { MigrationPilotConfig } from '../config/load.js';
import type { MutationOperator } from './operators.js';
export type FailOn = 'critical' | 'warning' | 'never';
export type HoleKind = 
/** The rule that would catch this is disabled or excluded. */
'rule-disabled'
/** The rule fired, but its severity was overridden below the failOn threshold. */
 | 'severity-downgraded'
/** The rule fired at its normal severity, but failOn doesn't fail the build on it. */
 | 'fail-on-threshold'
/** No built-in rule reports this mutation at all. */
 | 'not-covered';
export interface HoleReason {
    kind: HoleKind;
    /** Human-readable explanation, e.g. 'MP005 is disabled in your config'. */
    detail: string;
    /** Rules involved in the diagnosis. */
    ruleIds: string[];
}
export interface MutantResult {
    operatorId: string;
    operatorName: string;
    file: string;
    /** 1-based line of the mutated statement in the original file. */
    line: number;
    originalStatement: string;
    mutatedStatement: string;
    consequence: string;
    targetRules: string[];
    status: 'caught' | 'allowed';
    /** Violations introduced by the mutation, under the resolved config. */
    newViolations: RuleViolation[];
    /** Why the mutant slipped through. Present only when status is 'allowed'. */
    reason?: HoleReason;
}
export interface FileMutationReport {
    file: string;
    /** False when the file already fails its own config — mutation results are then less meaningful. */
    baselineClean: boolean;
    baselineViolations: RuleViolation[];
    mutants: MutantResult[];
    /** Set when the file could not be analysed at all. */
    skipped?: string;
}
export interface MutationReport {
    files: FileMutationReport[];
    totalMutants: number;
    caught: number;
    /** Allowed mutants a config change could catch. */
    holes: MutantResult[];
    /** Allowed mutants no built-in rule covers. */
    uncovered: MutantResult[];
    failOn: FailOn;
    pgVersion: number;
    ruleCount: number;
    operatorCount: number;
    elapsedMs: number;
}
export interface MutationRunOptions {
    /** Loaded config, used for severity overrides. */
    config: MigrationPilotConfig;
    /** Rules left after config, license and --exclude filtering. */
    rules: Rule[];
    /**
     * Rules available before config filtering (all rules for the current license).
     * Used to tell "your config opened this" apart from "no rule covers this".
     */
    baseRules: Rule[];
    pgVersion: number;
    failOn: FailOn;
    /** Defaults to every operator. */
    operators?: MutationOperator[];
}
interface StatementSpan {
    /** Offset of the first character of the statement, past leading comments. */
    start: number;
    /** Offset just past the last character, before the trailing semicolon. */
    end: number;
    sql: string;
    stmt: Record<string, unknown>;
    line: number;
}
/** Run the mutation test over one already-loaded migration file. */
export declare function mutateFile(file: string, sql: string, options: MutationRunOptions): Promise<FileMutationReport>;
/** Run the mutation test over several files and aggregate the results. */
export declare function runMutationTest(files: Array<{
    file: string;
    sql: string;
}>, options: MutationRunOptions): Promise<MutationReport>;
/** Whether a violation of this severity fails the build under `failOn`. */
export declare function meetsFailOn(severity: Severity, failOn: FailOn): boolean;
/**
 * Violations present in the mutant but not the baseline, compared per rule so a
 * pre-existing violation of the same rule doesn't mask a newly introduced one.
 */
export declare function newViolations(baseline: RuleViolation[], mutant: RuleViolation[]): RuleViolation[];
/**
 * Narrow a parsed statement's span to the statement itself: libpg-query reports
 * a range that starts at the end of the previous statement, so it carries any
 * leading whitespace and comments with it.
 */
export declare function statementSpan(sql: string, location: number, length: number): {
    start: number;
    end: number;
};
/**
 * Replace statement `index` with `replacement` and delete the statements in
 * `removes`. Deleting a statement also takes its trailing semicolon and line
 * break so the result stays readable SQL.
 */
export declare function applyEdit(sql: string, spans: StatementSpan[], index: number, replacement: string, removes: number[]): string;
export {};
//# sourceMappingURL=runner.d.ts.map