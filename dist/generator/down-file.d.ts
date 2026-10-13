/**
 * Finding the down migration that pairs with an up migration.
 *
 * Split out from ./grade.ts on purpose: grading is pure and runs in the browser
 * playground, this half touches the filesystem. Keep the import direction
 * one-way — grade.ts may import the `CompanionDown` type from here, never the
 * functions.
 */
export interface CompanionDown {
    present: boolean;
    /** Path to the down file, when the companion is a separate file. */
    path?: string;
    /** `file` — a sibling down migration. `inline` — a down section in this file. */
    kind?: 'file' | 'inline';
}
/**
 * Does this migration ship its own down section?
 *
 * Covers the tools that keep up and down in one file: dbmate, goose, and
 * Liquibase's two SQL-format rollback markers.
 */
export declare function hasInlineDownSection(sql: string): boolean;
/**
 * Look for a companion down migration next to `filePath`.
 *
 * @returns the path of the first companion found, or undefined.
 */
export declare function findCompanionDownFile(filePath: string): Promise<string | undefined>;
/**
 * Resolve whether a migration has a hand-written down path at all — either an
 * inline down section or a companion file.
 */
export declare function resolveCompanionDown(filePath: string, sql: string): Promise<CompanionDown>;
/**
 * Every path that could hold the reverse of `filePath`, in the order we trust
 * them. Covers the common layouts: `.down.sql` / `.rollback.sql` / `.undo.sql`
 * siblings, golang-migrate's `.up.sql` → `.down.sql` pair, Flyway's
 * `V1__x.sql` → `U1__x.sql` undo script, and `down/` or `revert/` directories.
 *
 * Exported for testing — it does not touch the filesystem.
 */
export declare function downFileCandidates(filePath: string): string[];
//# sourceMappingURL=down-file.d.ts.map