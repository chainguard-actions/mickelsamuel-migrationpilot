/**
 * Shared helpers for framework adapters: filesystem probing, path labelling,
 * and the version comparison every ordering rule ends up needing.
 */
export declare function exists(path: string): Promise<boolean>;
export declare function isDirectory(path: string): Promise<boolean>;
export declare function readText(path: string): Promise<string | null>;
export declare function readJson<T>(path: string): Promise<T | null>;
/** Files directly inside `dir` (no recursion), sorted by name. Empty when the dir is missing. */
export declare function listFiles(dir: string): Promise<string[]>;
/** Subdirectory names directly inside `dir`, sorted by name. Empty when the dir is missing. */
export declare function listDirs(dir: string): Promise<string[]>;
/** Every file under `dir`, recursively, as absolute paths sorted by path. */
export declare function walkFiles(dir: string, maxDepth?: number): Promise<string[]>;
/** Display label for a path: relative to root, always with forward slashes. */
export declare function labelFor(root: string, path: string): string;
/** Normalize a relative path for display (forward slashes, no leading "./"). */
export declare function toPosix(path: string): string;
/**
 * Compare dotted/underscored numeric versions the way migration tools do:
 * part by part, numerically when both parts are numeric, lexically otherwise.
 * `1.10` sorts after `1.9`; `V2` after `V1_5`.
 */
export declare function compareVersions(a: string, b: string): number;
/** Leading digits of a filename — the version for goose, dbmate, Knex, Sequelize, TypeORM. */
export declare function leadingNumericVersion(filename: string): string;
/** True when the file has one of the given extensions (case-insensitive). */
export declare function hasExtension(filename: string, ...exts: string[]): boolean;
/** True when the SQL has at least one statement the parser could act on. */
export declare function hasSqlContent(sql: string): boolean;
//# sourceMappingURL=util.d.ts.map