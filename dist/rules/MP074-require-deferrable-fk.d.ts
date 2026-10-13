import type { Rule } from './engine.js';
/**
 * MP074: require-deferrable-fk
 *
 * Foreign key constraints should be DEFERRABLE INITIALLY DEFERRED (or at
 * least DEFERRABLE) to support safe bulk operations and data migrations.
 *
 * Non-deferrable FKs are checked on every row during INSERT/UPDATE, which
 * means the order of operations matters for circular references and bulk
 * imports. DEFERRABLE constraints are checked at COMMIT time instead.
 */
export declare const requireDeferrableFk: Rule;
//# sourceMappingURL=MP074-require-deferrable-fk.d.ts.map