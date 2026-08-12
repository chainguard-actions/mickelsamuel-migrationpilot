import type { Rule } from './engine.js';
export { runRules } from './engine.js';
export type { Rule, RuleViolation, RuleContext, Severity } from './engine.js';
/** Rule IDs that require a Pro license (production context rules) */
export declare const PRO_RULE_IDS: Set<string>;
/** All built-in rules — MP001-MP080 (80 rules: 77 free, 3 paid) */
export declare const allRules: Rule[];
/** Free rules only — excludes Pro rules (MP013, MP014, MP019). Used by programmatic API. */
export declare const freeRules: Rule[];
//# sourceMappingURL=index.d.ts.map