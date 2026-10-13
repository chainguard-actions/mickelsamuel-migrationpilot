/**
 * JSON output formatter for MigrationPilot.
 *
 * Produces a structured, versioned JSON schema for programmatic consumption.
 * Used by `--format json` in both `analyze` and `check` commands.
 */
import type { AnalysisOutput, PolicyFindings } from './cli.js';
import type { Rule } from '../rules/engine.js';
import type { RiskLevel } from '../scoring/score.js';
import type { ReversibilityAssessment } from '../generator/grade.js';
import type { SequenceReportJson } from '../sequence/format.js';
export interface JsonViolation {
    ruleId: string;
    ruleName: string;
    severity: 'critical' | 'warning';
    message: string;
    line: number;
    safeAlternative?: string;
    whyItMatters?: string;
    docsUrl?: string;
}
export interface JsonStatement {
    sql: string;
    lockType: string;
    blocksReads: boolean;
    blocksWrites: boolean;
    riskLevel: RiskLevel;
    riskScore: number;
}
export interface JsonSummary {
    totalStatements: number;
    totalViolations: number;
    criticalCount: number;
    warningCount: number;
}
export interface JsonReport {
    $schema: string;
    version: string;
    file: string;
    riskLevel: RiskLevel;
    riskScore: number;
    riskFactors: Array<{
        name: string;
        value: number;
        weight: number;
        detail: string;
    }>;
    statements: JsonStatement[];
    violations: JsonViolation[];
    summary: JsonSummary;
    /** Rollback grade. Added in 1.6.0 — absent on reports built before it. */
    reversibility?: ReversibilityAssessment;
    /** Org policy findings. Added in 1.6.4 — present only when an Org key turned the policy on. */
    policy?: PolicyFindings;
}
export interface JsonMultiReport {
    $schema: string;
    version: string;
    files: JsonReport[];
    overallRiskLevel: RiskLevel;
    totalViolations: number;
    /** Cross-file findings. Added in 1.6.0 — absent when `--no-sequence` is used. */
    sequence?: SequenceReportJson;
}
/**
 * Format a single file analysis as structured JSON.
 */
export declare function formatJson(analysis: AnalysisOutput, rules?: Rule[]): string;
/**
 * Format multiple file analyses as structured JSON.
 *
 * @param sequence - Cross-file findings from `analyzeSequence`, already shaped
 *                   by `buildSequenceJson`. Omitted when sequence analysis is off.
 */
export declare function formatJsonMulti(results: AnalysisOutput[], rules?: Rule[], sequence?: SequenceReportJson): string;
/**
 * Build the structured report for one analysis.
 *
 * Exported so other commands can embed the exact same static-analysis document
 * in their own output instead of describing the same data a second way.
 */
export declare function buildJsonReport(analysis: AnalysisOutput, rules?: Rule[]): JsonReport;
//# sourceMappingURL=json.d.ts.map