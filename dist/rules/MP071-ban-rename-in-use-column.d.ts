import type { Rule } from './engine.js';
/**
 * MP071: ban-rename-in-use-column
 *
 * Renaming a column does NOT automatically update views, functions,
 * triggers, or policies that reference the old column name. These
 * dependent objects will fail at query time — not at migration time.
 *
 * This rule specifically warns when a column rename is not accompanied
 * by updates to dependent objects in the same migration. Complements
 * MP010 (general rename warning) and MP052 (dependent objects warning).
 */
export declare const banRenameInUseColumn: Rule;
//# sourceMappingURL=MP071-ban-rename-in-use-column.d.ts.map