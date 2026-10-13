/**
 * MP104: warn-long-index-build
 *
 * An index build whose duration, estimated from the live row count, runs into
 * minutes or hours. The estimate is deliberately a wide range — build speed
 * depends on key width, maintenance_work_mem, parallel workers, and I/O, and
 * none of that is knowable from the migration file.
 *
 * Production-context rule: silent without --database-url, because the row count
 * comes from the catalog.
 */
import type { Rule } from './engine.js';
export declare const warnLongIndexBuild: Rule;
//# sourceMappingURL=MP104-warn-long-index-build.d.ts.map