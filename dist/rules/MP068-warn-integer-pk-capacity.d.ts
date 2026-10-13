import type { Rule } from './engine.js';
/**
 * MP068: warn-integer-pk-capacity
 *
 * CREATE SEQUENCE with an integer type (int2, int4) has a hard overflow limit.
 * int4 maxes out at ~2.1 billion, int2 at ~32,000.
 * Migrating a sequence from int to bigint on a live table is extremely expensive.
 *
 * This complements MP038 (prefer-bigint-over-int for columns) by catching
 * explicit sequence definitions and SERIAL-based sequences.
 */
export declare const warnIntegerPkCapacity: Rule;
//# sourceMappingURL=MP068-warn-integer-pk-capacity.d.ts.map