/**
 * MP106: prefer-timescale-drop-chunks
 *
 * A time-ranged DELETE against a hypertable. TimescaleDB stores the data in
 * chunks partitioned on exactly that time column, so the rows being deleted are
 * whole chunks — drop_chunks() unlinks them as files instead of deleting rows
 * one at a time.
 *
 * Production-context rule: silent without --database-url. Both the hypertable
 * membership and the time dimension come from the TimescaleDB catalog.
 */
import type { Rule } from './engine.js';
export declare const preferTimescaleDropChunks: Rule;
//# sourceMappingURL=MP106-prefer-timescale-drop-chunks.d.ts.map