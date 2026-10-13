/**
 * MP105: warn-timescale-hypertable-ddl
 *
 * Raw DDL against a TimescaleDB hypertable. A hypertable is a facade over many
 * chunks, and TimescaleDB propagates the statement to every one of them, so the
 * lock footprint and the duration scale with the chunk count rather than looking
 * like the single-table statement in the migration file.
 *
 * Production-context rule: silent without --database-url. Hypertable membership
 * is only knowable from the TimescaleDB catalog — a create_hypertable() call in
 * some other migration file is out of scope.
 */
import type { Rule } from './engine.js';
export declare const warnTimescaleHypertableDdl: Rule;
//# sourceMappingURL=MP105-warn-timescale-hypertable-ddl.d.ts.map