import type { Rule } from './engine.js';
export { runRules, violationsOfStatement } from './engine.js';
export type { Rule, RuleViolation, RuleContext, Severity } from './engine.js';
/**
 * All built-in rules, in ID order.
 *
 * Rules marked `requiresDatabaseUrl` read the live catalog (table size, write
 * traffic, replication, extension metadata). With no --database-url there is
 * nothing to read, so they stay silent. MP109 is the exception in the MP100
 * range — it works from the migration file alone.
 */
export declare const allRules: Rule[];
/** Rules that work from the migration file alone, with no database connection. */
export declare const staticRules: Rule[];
//# sourceMappingURL=index.d.ts.map