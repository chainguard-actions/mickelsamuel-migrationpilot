import type { Rule } from './engine.js';
/**
 * MP069: warn-fk-lock-both-tables
 *
 * Adding a foreign key constraint acquires a SHARE ROW EXCLUSIVE lock
 * on BOTH the source table (where the FK column lives) and the referenced
 * table (the target). This means two tables are locked simultaneously,
 * which doubles the blast radius and can cause unexpected blocking.
 *
 * This is different from MP005 (which focuses on NOT VALID) — MP069 warns
 * about the dual-table locking regardless of NOT VALID usage.
 */
export declare const warnFkLockBothTables: Rule;
//# sourceMappingURL=MP069-warn-fk-lock-both-tables.d.ts.map