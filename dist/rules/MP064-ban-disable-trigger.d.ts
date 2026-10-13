import type { Rule } from './engine.js';
/**
 * MP064: ban-disable-trigger
 *
 * ALTER TABLE ... DISABLE TRIGGER ALL/USER disables all triggers on the table.
 * This is extremely dangerous in production:
 * - Breaks logical replication (which relies on triggers)
 * - Bypasses audit triggers
 * - Skips foreign key enforcement
 * - If the session crashes, triggers remain disabled
 */
export declare const banDisableTrigger: Rule;
//# sourceMappingURL=MP064-ban-disable-trigger.d.ts.map