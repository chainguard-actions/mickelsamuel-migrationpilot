/**
 * Cross-migration dependency graph.
 *
 * Analyzes multiple migration files to build a dependency graph. Files that
 * reference tables created by other files form dependency edges. Detects
 * cycles (via DFS) and orphaned files that neither depend on nor are
 * depended upon by any other file.
 */
export interface DependencyNode {
    /** Path or identifier for the migration file. */
    file: string;
    /** Tables created, altered, or dropped in this file. */
    tables: string[];
    /** Files that this file depends on (must run before). */
    dependsOn: string[];
    /** Files that depend on this file (must run after). */
    dependedBy: string[];
}
export interface DependencyGraph {
    /** All nodes in the dependency graph. */
    nodes: DependencyNode[];
    /** Detected dependency cycles (each cycle is a list of file paths). */
    cycles: string[][];
    /** Files that have no dependencies in either direction. */
    orphans: string[];
}
/**
 * Build a dependency graph from a set of migration files.
 *
 * Parses each file to discover which tables it creates and which tables
 * it references. Builds directed edges between files: if file B references
 * a table created by file A, then B depends on A.
 *
 * @param files - Array of migration files with path and SQL content.
 * @returns The complete dependency graph with cycle and orphan detection.
 */
export declare function buildDependencyGraph(files: Array<{
    path: string;
    sql: string;
}>): Promise<DependencyGraph>;
//# sourceMappingURL=dependencies.d.ts.map