/**
 * Historical analysis storage.
 *
 * Stores analysis results in ~/.migrationpilot/history/ as JSONL files.
 * Provides trend analysis: violation counts, risk scores over time.
 */
export interface HistoryEntry {
    timestamp: string;
    file: string;
    riskLevel: string;
    riskScore: number;
    violationCount: number;
    criticalCount: number;
    warningCount: number;
    statementCount: number;
    ruleCount: number;
}
export interface TrendSummary {
    totalAnalyses: number;
    recentAnalyses: HistoryEntry[];
    averageRiskScore: number;
    totalViolations: number;
    criticalViolations: number;
    warningViolations: number;
    riskTrend: 'improving' | 'stable' | 'worsening';
    violationTrend: 'improving' | 'stable' | 'worsening';
}
/**
 * Record an analysis result in history.
 */
export declare function recordAnalysis(entry: HistoryEntry): Promise<void>;
/**
 * Read all history entries, most recent first.
 */
export declare function readHistory(limit?: number): Promise<HistoryEntry[]>;
/**
 * Compute trend analysis from history.
 */
export declare function computeTrends(): Promise<TrendSummary>;
/**
 * Format trends as readable output.
 */
export declare function formatTrends(trends: TrendSummary): string;
//# sourceMappingURL=store.d.ts.map