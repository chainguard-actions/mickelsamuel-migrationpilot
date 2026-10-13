import type { Rule } from './engine.js';
/**
 * MP096: CREATE MATERIALIZED VIEW ... WITH DATA
 *
 * WITH DATA is the default, so most CREATE MATERIALIZED VIEW statements
 * populate the view immediately — running the underlying query to completion
 * inside the migration, holding locks on every table it reads for the whole
 * build.
 *
 * WITH NO DATA creates the view unpopulated and returns instantly. The build
 * then happens in a REFRESH the migration does not have to wait for. The
 * catch worth knowing: an unpopulated matview cannot be queried until its
 * first REFRESH, and that first REFRESH cannot use CONCURRENTLY.
 */
export declare const warnMatviewWithData: Rule;
//# sourceMappingURL=MP096-warn-matview-with-data.d.ts.map