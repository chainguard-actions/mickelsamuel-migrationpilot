/**
 * Team management for MigrationPilot Enterprise/Team tiers.
 *
 * Handles:
 * - Organization-level license validation with seat management
 * - Team member tracking (who ran analyses, when)
 * - Centralized configuration fetching from org config URL
 * - Team activity reporting
 *
 * Config in .migrationpilotrc.yml:
 *
 * team:
 *   org: "acme-corp"
 *   configUrl: "https://config.acme.com/migrationpilot.yml"
 *   maxSeats: 25
 *   requireApproval:
 *     - "DROP TABLE"
 *     - "ALTER TYPE"
 */
export interface TeamConfig {
    /** Organization identifier */
    org: string;
    /** URL to fetch centralized team config from */
    configUrl?: string;
    /** Maximum number of licensed seats */
    maxSeats?: number;
    /** DDL operations that require explicit team lead approval */
    requireApproval?: string[];
    /** Contact email for the team admin */
    adminEmail?: string;
}
export interface TeamMember {
    /** Username (from git config or env) */
    username: string;
    /** Anonymized machine ID */
    machineId: string;
    /** When this member first ran MigrationPilot */
    firstSeen: string;
    /** When this member last ran MigrationPilot */
    lastSeen: string;
    /** Total number of analyses run */
    analysisCount: number;
}
export interface TeamActivity {
    timestamp: string;
    username: string;
    command: string;
    file?: string;
    violationCount?: number;
    riskLevel?: string;
    org: string;
}
export interface TeamStatus {
    org: string;
    seats: {
        used: number;
        max: number;
        remaining: number;
    };
    members: TeamMember[];
    recentActivity: TeamActivity[];
}
/**
 * Get the current username from git config or environment.
 */
export declare function getCurrentUsername(): string;
/**
 * Generate an anonymized machine ID for seat tracking.
 * Uses hostname + username hash to identify unique seats.
 */
export declare function getMachineId(): string;
/**
 * Register or update the current user as a team member.
 * Returns the updated member list and whether the seat limit is exceeded.
 */
export declare function registerTeamMember(maxSeats: number): Promise<{
    members: TeamMember[];
    isNewSeat: boolean;
    seatLimitExceeded: boolean;
}>;
/**
 * Record a team activity event.
 */
export declare function recordTeamActivity(activity: Omit<TeamActivity, 'timestamp' | 'username'>): Promise<void>;
/**
 * Get the full team status including seats, members, and recent activity.
 */
export declare function getTeamStatus(config: TeamConfig): Promise<TeamStatus>;
/**
 * Fetch centralized team configuration from a URL.
 * Returns the raw YAML string or null if fetch fails.
 */
export declare function fetchRemoteConfig(configUrl: string): Promise<string | null>;
/**
 * Check if a DDL operation requires team approval.
 */
export declare function requiresApproval(sql: string, requireApproval: string[]): {
    required: boolean;
    operations: string[];
};
/**
 * Format team status for CLI display.
 */
export declare function formatTeamStatus(status: TeamStatus): string;
//# sourceMappingURL=manage.d.ts.map