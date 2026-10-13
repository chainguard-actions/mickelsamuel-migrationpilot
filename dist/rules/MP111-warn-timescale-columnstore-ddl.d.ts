/**
 * MP111: warn-timescale-columnstore-ddl
 *
 * An ALTER form that TimescaleDB refuses on a hypertable with compression /
 * columnstore enabled. These do not run slowly — they error out, so the
 * migration fails partway through unless the columnstore is unwound first.
 *
 * Production-context rule: silent without --database-url. Whether compression is
 * enabled is only knowable from the TimescaleDB catalog.
 */
import type { Rule } from './engine.js';
export declare const warnTimescaleColumnstoreDdl: Rule;
//# sourceMappingURL=MP111-warn-timescale-columnstore-ddl.d.ts.map