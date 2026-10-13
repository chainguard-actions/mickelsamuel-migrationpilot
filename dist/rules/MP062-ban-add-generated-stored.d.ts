import type { Rule } from './engine.js';
/**
 * MP062: ban-add-generated-stored-column
 *
 * ALTER TABLE ... ADD COLUMN ... GENERATED ALWAYS AS (...) STORED
 * causes a full table rewrite under ACCESS EXCLUSIVE lock.
 *
 * On large tables this means significant downtime. Use a regular
 * column + trigger-based computation, or a virtual (non-stored)
 * generated column (PG 17+) instead.
 */
export declare const banAddGeneratedStored: Rule;
//# sourceMappingURL=MP062-ban-add-generated-stored.d.ts.map