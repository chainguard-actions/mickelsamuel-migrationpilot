/**
 * Client-side usage tracking for free production analyses.
 *
 * Free-tier users get 3 production context analyses per month.
 * Usage is stored locally in ~/.migrationpilot/usage.json.
 * Resets automatically on the first day of each month.
 */
/**
 * Check if a free production analysis is allowed.
 * Returns { allowed, remaining, limit } to inform the user.
 */
export declare function checkFreeUsage(): Promise<{
    allowed: boolean;
    used: number;
    remaining: number;
    limit: number;
}>;
/**
 * Record a free production analysis.
 * Call this AFTER a successful analysis with --database-url on free tier.
 */
export declare function recordFreeUsage(): Promise<void>;
/** Exported for testing */
export declare const FREE_LIMIT = 3;
//# sourceMappingURL=track.d.ts.map