/**
 * Health check diagnostics for MigrationPilot.
 *
 * Verifies environment, configuration, and installation status.
 * Returns a list of diagnostic results for display.
 */
export interface DiagnosticResult {
    label: string;
    status: 'ok' | 'warn' | 'error';
    message: string;
}
/**
 * Run all diagnostic checks and return results.
 */
export declare function runDiagnostics(opts: {
    currentVersion: string;
    nodeVersion: string;
    platform: string;
    arch: string;
    ruleCount: number;
    cwd?: string;
}): Promise<DiagnosticResult[]>;
//# sourceMappingURL=check.d.ts.map