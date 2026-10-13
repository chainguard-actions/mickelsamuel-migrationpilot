/**
 * Report writers for sequence-level analysis.
 *
 * Text output follows the shape of the per-file report in ../output/cli.ts —
 * banner, findings, table — so `check` reads as one document. JSON output is
 * shaped here and embedded in the multi-file report by ../output/json.ts.
 */
import type { SequenceAnalysis, SequenceFindingId, TableBlastRadius } from './analyze.js';
export interface SequenceReportJson {
    fileCount: number;
    files: string[];
    statementCount: number;
    thresholds: {
        lockBudgetSeconds: number;
        hotTableFileThreshold: number;
    };
    findings: Array<{
        id: SequenceFindingId;
        name: string;
        severity: 'critical' | 'warning';
        message: string;
        files: string[];
        table?: string;
        detail?: string;
    }>;
    /** SQ005 — the blast-radius summary. */
    blastRadius: {
        totalEstimatedLockSeconds: number;
        estimateBasis: 'measured' | 'heuristic';
        tables: TableBlastRadius[];
    };
    summary: {
        totalFindings: number;
        criticalCount: number;
        warningCount: number;
        tablesTouched: number;
    };
    parseErrors: Array<{
        file: string;
        error: string;
    }>;
}
/**
 * Render the sequence report for the terminal.
 *
 * Returns an empty string when there is nothing worth saying — a single-file
 * run, or a clean sequence that touches nothing under a blocking lock.
 */
export declare function formatSequenceReport(analysis: SequenceAnalysis): string;
/** Shape the analysis for the `--format json` report. */
export declare function buildSequenceJson(analysis: SequenceAnalysis): SequenceReportJson;
//# sourceMappingURL=format.d.ts.map