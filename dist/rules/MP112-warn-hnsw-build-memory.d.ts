/**
 * MP112: warn-hnsw-build-memory
 *
 * An HNSW build on a large table with a small maintenance_work_mem. pgvector
 * builds the graph in memory while it fits and switches to a much slower path
 * once it does not, so the same statement can take minutes or hours depending on
 * a setting the migration never mentions.
 *
 * Production-context rule: silent without --database-url. It needs both the row
 * count and the server's maintenance_work_mem.
 */
import type { Rule } from './engine.js';
export declare const warnHnswBuildMemory: Rule;
//# sourceMappingURL=MP112-warn-hnsw-build-memory.d.ts.map