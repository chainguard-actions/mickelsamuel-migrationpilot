/**
 * Framework adapter registry.
 *
 * `resolveFrameworkMigrations()` is the entry point behind zero-config
 * `migrationpilot check`: it asks every adapter whether it recognizes the
 * project, then picks the one that can actually deliver SQL.
 */
import type { FrameworkId } from '../detect.js';
import type { Adapter, AdapterResult } from './types.js';
/** Registry order doubles as the tie-break when two adapters match equally well. */
export declare const adapters: Adapter[];
export declare const adapterIds: FrameworkId[];
export declare function getAdapter(id: string): Adapter | undefined;
/** Every adapter that recognizes this project, best first. */
export declare function resolveAllFrameworks(root: string): Promise<AdapterResult[]>;
/**
 * The single best adapter for this project, or null when none recognize it.
 * Pass `framework` to force one (and get null if that one does not match).
 */
export declare function resolveFrameworkMigrations(root: string, framework?: string): Promise<AdapterResult | null>;
export type { Adapter, AdapterResult, ResolvedMigration, SkippedFile, SupportLevel, FrameworkRecipe, MigrationOrigin } from './types.js';
export { runSqlCommand } from './from-command.js';
export type { CommandResult } from './from-command.js';
export { extractSqlFromJs } from './js-extract.js';
export type { JsExtraction, ExtractedStatement, DynamicCall } from './js-extract.js';
export { extractGooseUp, extractDbmateUp, isLiquibaseFormattedSql } from './sections.js';
export { formatAdapterBanner, formatAdapterDetails, formatRecipe } from './report.js';
//# sourceMappingURL=index.d.ts.map