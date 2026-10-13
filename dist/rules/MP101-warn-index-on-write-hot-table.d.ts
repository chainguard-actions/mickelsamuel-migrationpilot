/**
 * MP101: warn-index-on-write-hot-table
 *
 * Adding an index to a table that takes heavy write traffic. Every index is a
 * tax on every write, and the build itself competes with that traffic.
 *
 * Production-context rule: silent without --database-url. Reads
 * pg_stat_user_tables, so unlike MP013 it does not need pg_stat_statements.
 */
import type { Rule } from './engine.js';
export declare const warnIndexOnWriteHotTable: Rule;
//# sourceMappingURL=MP101-warn-index-on-write-hot-table.d.ts.map