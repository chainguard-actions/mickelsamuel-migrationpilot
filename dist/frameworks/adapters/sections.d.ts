/**
 * Section extraction for annotated SQL migrations (goose, dbmate).
 *
 * These frameworks keep the up and down migration in one file, separated by
 * comment directives. Only the "up" half describes what will happen to
 * production, so that is all MigrationPilot analyzes.
 *
 * Everything outside the up section is blanked out rather than deleted, so the
 * line numbers in violations still point at the real line in the real file.
 */
export interface SectionExtraction {
    /** SQL with non-up lines blanked, so line numbers match the source file */
    sql: string;
    /** False when the file has no up marker at all */
    foundUp: boolean;
    /** Directives seen inside the up section, e.g. "NO TRANSACTION" */
    directives: string[];
}
/**
 * Extract the `-- +goose Up` half of a goose migration.
 *
 * StatementBegin/StatementEnd markers are left in place: they are SQL comments,
 * so the parser ignores them and the line numbers stay honest.
 */
export declare function extractGooseUp(sql: string): SectionExtraction;
/**
 * Extract the `-- migrate:up` half of a dbmate migration.
 * dbmate allows several up/down pairs in one file, so this handles repeats.
 */
export declare function extractDbmateUp(sql: string): SectionExtraction;
/** True when a file looks like a Liquibase formatted-SQL changelog. */
export declare function isLiquibaseFormattedSql(sql: string): boolean;
/** Changeset ids declared in a Liquibase formatted-SQL file, in file order. */
export declare function liquibaseChangesets(sql: string): string[];
//# sourceMappingURL=sections.d.ts.map