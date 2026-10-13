/**
 * Flyway adapter — Tier 1 (full support).
 *
 * Flyway migrations are SQL files named `V<version>__<description>.sql`, found
 * in the configured `locations`. Ordering is Flyway's own: all pending
 * versioned migrations in version order, then repeatable (`R__`) migrations in
 * description order. Undo migrations (`U__`) only run on `flyway undo`, so they
 * are listed as skipped rather than analyzed as if they were going to prod.
 *
 * `flyway.conf` and `flyway.toml` are both read for locations and for the
 * prefix/separator/suffix settings, since those change what counts as a
 * migration file.
 */
import type { Adapter } from './types.js';
export declare const flywayAdapter: Adapter;
//# sourceMappingURL=flyway.d.ts.map