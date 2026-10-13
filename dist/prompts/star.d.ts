/**
 * One-time "Star on GitHub" prompt after first analysis with violations.
 *
 * Shows a single non-intrusive message linking to the GitHub repo.
 * Stored in ~/.migrationpilot/config.json to never show again.
 * Suppressed in CI environments and with MIGRATIONPILOT_NO_PROMPTS=1.
 */
/**
 * Show "Star on GitHub" message if not shown before and conditions are met.
 * Returns the message string or null if suppressed.
 */
export declare function maybeShowStarPrompt(hasViolations: boolean): Promise<string | null>;
//# sourceMappingURL=star.d.ts.map