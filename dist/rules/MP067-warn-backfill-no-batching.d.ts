import type { Rule } from './engine.js';
/**
 * MP067: warn-backfill-no-batching
 *
 * DELETE without a WHERE clause removes every row in a single transaction,
 * generating massive WAL, holding ROW EXCLUSIVE lock, and potentially
 * causing replication lag and disk pressure.
 *
 * Complements MP011 (unbatched UPDATE). Together they cover all unbatched
 * data modifications in migrations.
 */
export declare const warnBackfillNoBatching: Rule;
//# sourceMappingURL=MP067-warn-backfill-no-batching.d.ts.map