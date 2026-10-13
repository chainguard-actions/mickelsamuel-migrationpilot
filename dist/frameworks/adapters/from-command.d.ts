/**
 * `--from-command` support.
 *
 * For frameworks whose SQL only exists once they generate it (Django, Alembic,
 * Liquibase XML, Rails), the honest path is to run the generator and analyze
 * what it prints. This runs a user-supplied command and hands back its stdout.
 *
 * The command is the user's own — nothing is inferred or run implicitly.
 */
export interface CommandResult {
    /** stdout of the command — the SQL to analyze */
    sql: string;
    /** stderr, surfaced when the command fails (Alembic logs here on success too) */
    stderr: string;
    exitCode: number;
    /** Set when the process could not be started or timed out */
    error?: string;
}
export interface RunOptions {
    cwd?: string;
    /** Milliseconds before the command is killed (default 2 minutes) */
    timeoutMs?: number;
}
export declare function runSqlCommand(command: string, options?: RunOptions): Promise<CommandResult>;
//# sourceMappingURL=from-command.d.ts.map