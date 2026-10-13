/**
 * Update checker for MigrationPilot CLI.
 *
 * Fetches the latest version from npm registry and compares with the
 * current version. Caches results for 24 hours in ~/.migrationpilot/.
 */
/**
 * Check if a newer version is available on npm.
 * Returns a message string if an update is available, or null if up to date.
 * Respects MIGRATIONPILOT_NO_UPDATE_CHECK=1 and CI environments.
 */
export declare function checkForUpdate(currentVersion: string): Promise<string | null>;
//# sourceMappingURL=check.d.ts.map