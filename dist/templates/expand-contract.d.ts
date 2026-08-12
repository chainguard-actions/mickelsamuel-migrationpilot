/**
 * Expand-contract migration template generator.
 *
 * Generates 3-phase migration templates for common schema operations that
 * require zero-downtime deployments. The expand-contract pattern ensures
 * safe rollout by:
 *
 *   1. **Expand** — Add new structures alongside old ones.
 *   2. **Migrate** — Copy/transform data from old to new (in batches).
 *   3. **Contract** — Remove old structures once fully migrated.
 *
 * Each phase uses proper lock_timeout, statement_timeout, and batch
 * processing to minimize production impact.
 */
export interface MigrationTemplate {
    /** Template name describing the operation. */
    name: string;
    /** Phase 1: Expand SQL — add new structures. */
    expand: string;
    /** Phase 2: Migrate SQL — copy/transform data. */
    migrate: string;
    /** Phase 3: Contract SQL — remove old structures. */
    contract: string;
    /** Human-readable description of the migration strategy. */
    description: string;
}
type OperationType = 'rename-column' | 'change-type' | 'split-table' | 'add-not-null' | 'remove-column';
interface TemplateOpts {
    /** Target table name. */
    table: string;
    /** Column to operate on. */
    column?: string;
    /** New column name (for rename operations). */
    newName?: string;
    /** New column type (for type change operations). */
    newType?: string;
}
/**
 * Generate a 3-phase expand-contract migration template for the specified
 * operation. Each template includes proper timeouts, batch processing,
 * and safe DDL patterns.
 *
 * @param operation - The type of schema change to perform.
 * @param opts - Options specifying the table, column, and target values.
 * @returns A complete 3-phase migration template.
 */
export declare function generateTemplate(operation: OperationType, opts: TemplateOpts): MigrationTemplate;
export {};
//# sourceMappingURL=expand-contract.d.ts.map