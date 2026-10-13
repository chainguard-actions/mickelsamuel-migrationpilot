/**
 * Custom rules plugin loader for MigrationPilot.
 *
 * Supports ESLint-style rule plugins loaded from config:
 *
 * ```yaml
 * plugins:
 *   - "./rules/my-custom-rule.js"
 *   - "migrationpilot-plugin-company"
 *
 * customRules:
 *   MY001:
 *     severity: critical
 * ```
 *
 * Plugin format:
 * ```typescript
 * export default {
 *   rules: [
 *     {
 *       id: 'MY001',
 *       name: 'my-custom-rule',
 *       severity: 'warning',
 *       description: 'What this rule checks',
 *       check(stmt, context) { return null; }
 *     }
 *   ]
 * };
 * ```
 */
import type { Rule, Severity, RuleViolation, RuleContext } from '../rules/engine.js';
export interface PluginRule {
    id: string;
    name: string;
    severity?: Severity;
    description?: string;
    whyItMatters?: string;
    docsUrl?: string;
    check: (stmt: Record<string, unknown>, context: RuleContext) => RuleViolation | null;
}
export interface Plugin {
    rules: PluginRule[];
}
export interface PluginLoadResult {
    rules: Rule[];
    errors: string[];
}
/**
 * Load custom rule plugins from the given paths.
 *
 * @param pluginPaths - Array of plugin module paths (relative to cwd or npm package names)
 * @param cwd - Working directory for resolving relative paths
 * @returns Loaded rules and any errors encountered
 */
export declare function loadPlugins(pluginPaths: string[], cwd?: string): Promise<PluginLoadResult>;
//# sourceMappingURL=loader.d.ts.map