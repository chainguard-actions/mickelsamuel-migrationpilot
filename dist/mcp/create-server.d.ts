/**
 * MigrationPilot MCP server definition.
 *
 * Kept separate from `server.ts` so tests can build a server instance and drive
 * it over an in-memory transport without the stdio entrypoint running.
 *
 * Tools:
 * - analyze_migration      Analyze SQL for safety issues
 * - suggest_fix            Get safe alternatives for a specific rule violation
 * - explain_lock           Explain what lock a DDL statement acquires
 * - list_rules             List all available safety rules
 * - check_before_apply     Pass/fail gate to call before executing DDL
 * - analyze_migration_dir  Analyze every migration file in a directory
 * - get_rule               Full documentation for one rule
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
export declare function createServer(): McpServer;
//# sourceMappingURL=create-server.d.ts.map