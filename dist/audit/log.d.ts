/**
 * Audit logging for enterprise compliance.
 *
 * Records all MigrationPilot operations as JSONL events.
 * Configurable via `auditLog` in .migrationpilotrc.yml:
 *
 * auditLog:
 *   enabled: true
 *   path: ./migrationpilot-audit.jsonl
 */
export interface AuditEvent {
    timestamp: string;
    event: string;
    command: string;
    file?: string;
    riskLevel?: string;
    riskScore?: number;
    violationCount?: number;
    exitCode?: number;
    user?: string;
    ci?: boolean;
    metadata?: Record<string, unknown>;
}
export interface AuditConfig {
    enabled: boolean;
    path: string;
}
/**
 * Configure audit logging. Call once at CLI startup.
 */
export declare function configureAudit(config: Partial<AuditConfig> | undefined): void;
/**
 * Record an audit event. No-op if audit logging is disabled.
 */
export declare function auditLog(event: Omit<AuditEvent, 'timestamp' | 'ci' | 'user'>): Promise<void>;
/**
 * Check if audit logging is enabled.
 */
export declare function isAuditEnabled(): boolean;
//# sourceMappingURL=log.d.ts.map