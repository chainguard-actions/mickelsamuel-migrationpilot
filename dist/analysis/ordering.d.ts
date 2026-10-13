/**
 * Migration file ordering and dependency validation.
 *
 * Validates that migration files follow proper ordering conventions,
 * detects potential conflicts, and warns about missing dependencies.
 *
 * Supported naming patterns:
 * - Flyway: V001__description.sql (version prefix)
 * - Timestamp: 20230101120000_description.sql
 * - Sequential: 001_description.sql
 */
export interface MigrationFile {
    path: string;
    name: string;
    /** Parsed version/sequence number */
    version: string;
    /** Tables created in this migration */
    createdTables: string[];
    /** Tables referenced (ALTER, INSERT, etc.) in this migration */
    referencedTables: string[];
}
export interface OrderingIssue {
    type: 'out-of-order' | 'duplicate-version' | 'missing-dependency' | 'gap' | 'invalid-name';
    severity: 'critical' | 'warning';
    message: string;
    files: string[];
}
/**
 * Validate the ordering and dependencies of migration files.
 */
export declare function validateOrdering(files: MigrationFile[]): OrderingIssue[];
/**
 * Find files that use a table before the file that creates it.
 *
 * Takes the files **in the order they will be applied** — `validateOrdering`
 * passes its version-sorted list, sequence analysis passes the order the runner
 * will actually use, which is what catches a forward reference that version
 * sorting would paper over.
 */
export declare function findMissingDependencies(orderedFiles: MigrationFile[]): OrderingIssue[];
/**
 * Parse a migration filename into its version component.
 */
export declare function parseVersion(filename: string): string;
/**
 * Build MigrationFile objects from file paths and parsed SQL data.
 */
export declare function buildMigrationFiles(files: Array<{
    path: string;
    createdTables: string[];
    referencedTables: string[];
}>): MigrationFile[];
//# sourceMappingURL=ordering.d.ts.map