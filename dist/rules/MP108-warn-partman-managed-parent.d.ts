/**
 * MP108: warn-partman-managed-parent
 *
 * Hand-written partition DDL on a parent that pg_partman manages. partman
 * creates, attaches, and drops children itself from what part_config says;
 * partitions made by hand sit outside that bookkeeping and collide with the ones
 * maintenance tries to create.
 *
 * Production-context rule: silent without --database-url. Whether a parent is
 * managed is only knowable from part_config.
 */
import type { Rule } from './engine.js';
export declare const warnPartmanManagedParent: Rule;
//# sourceMappingURL=MP108-warn-partman-managed-parent.d.ts.map