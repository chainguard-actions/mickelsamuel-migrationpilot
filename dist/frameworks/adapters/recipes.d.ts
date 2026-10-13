/**
 * Django / Alembic / Rails adapters — Tier 2 (recipe).
 *
 * These frameworks describe migrations in Python or Ruby. The SQL exists only
 * once the framework renders it against a specific database, so MigrationPilot
 * does not pretend to read it. Each adapter reports what it found, explains
 * exactly why there is nothing to analyze yet, and hands back the command that
 * produces the SQL — which `check --from-command` can run and analyze for real.
 */
import type { Adapter } from './types.js';
export declare const djangoAdapter: Adapter;
export declare const alembicAdapter: Adapter;
export declare const railsAdapter: Adapter;
//# sourceMappingURL=recipes.d.ts.map