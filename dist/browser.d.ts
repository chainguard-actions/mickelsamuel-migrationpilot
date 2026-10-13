/**
 * MigrationPilot — browser entrypoint.
 *
 * Bundled by scripts/build-playground.js into site/public/playground/engine.js,
 * which is what the /playground page loads. It pulls in the pure analysis path
 * only — parser, lock classification, rules, scoring, JSON report — so the whole
 * rule set runs in the visitor's browser and the SQL never leaves the page.
 *
 * Keep this file free of anything that reaches for the filesystem, a config
 * file, a database, or the CLI formatters (chalk/cli-table3). Those drag in
 * Node built-ins that cannot be bundled for a browser.
 */
import type { JsonReport } from './output/json.js';
export interface PlaygroundReport extends JsonReport {
    /** Set when the SQL could not be parsed. Every other field is empty. */
    parseError?: string;
}
export interface ProductionRuleInfo {
    id: string;
    name: string;
    description: string;
    docsUrl: string;
}
/** How many rules ship in this bundle — the full built-in set. */
export declare const ruleCount: number;
/**
 * Rules that can only fire against a live database (`--database-url`). They score
 * table size, query traffic, and connection counts, none of which a browser can see,
 * so they stay silent here rather than being quietly missing.
 */
export declare const productionRules: ProductionRuleInfo[];
/** Compile the PostgreSQL parser WASM up front so the first analysis is instant. */
export declare function warmup(): Promise<void>;
/**
 * Analyze a migration entirely in the browser.
 *
 * @param sql - Raw migration SQL
 * @param pgVersion - Target PostgreSQL major version
 * @returns The same report shape `migrationpilot analyze --format json` prints,
 *          plus `parseError` when the SQL could not be parsed.
 */
export declare function analyzeMigration(sql: string, pgVersion: number): Promise<PlaygroundReport>;
//# sourceMappingURL=browser.d.ts.map