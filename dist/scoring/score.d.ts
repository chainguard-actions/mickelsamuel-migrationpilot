/**
 * Risk scoring for MigrationPilot — the one place the numbers are defined.
 *
 * A score is **danger, 0–100**: higher is worse, never a safety percentage.
 * `RED` at 50 and above, `YELLOW` at 25, `GREEN` below that.
 *
 * There are two scores, and they answer different questions:
 *
 * - `calculateRisk` scores **one statement's blast radius** — how badly its lock
 *   hurts, widened by table size and query traffic when a production connection
 *   supplies them. Rule violations are deliberately absent: this measures what
 *   the statement does to the database, not whether it broke a rule.
 *
 * - `calculateOverallRisk` scores **the migration**, and is the number every
 *   headline shows: the CLI badge, `--format json`, the PR comment emoji, the
 *   MCP tools, the playground. It is the worse of the two tracks — the blast
 *   radius of the worst statement, and what the rules found.
 *
 * The headline has to weigh violations because the blast-radius track alone
 * cannot reach RED without a production connection: lock severity caps at 40,
 * and table size and query frequency need `--database-url`. Scoring the
 * headline on locks alone meant a free-tier file full of CRITICAL violations
 * came out at 30/100 "Moderate risk", which is exactly backwards. Criticals now
 * start the migration at 70 and climb, so a critical always reads RED.
 */
import type { LockClassification } from '../locks/classify.js';
import type { Severity } from '../rules/engine.js';
export type RiskLevel = 'RED' | 'YELLOW' | 'GREEN';
/**
 * Name of the factor carrying the violation track in `calculateOverallRisk`.
 *
 * Every other factor in that list belongs to the blast-radius track and adds
 * up; this one competes with their total. Reports that explain the breakdown
 * need to tell the two apart, so the name is a constant rather than a string
 * they each guess at.
 */
export declare const VIOLATION_FACTOR = "Rule Violations";
export interface RiskFactor {
    name: string;
    weight: number;
    value: number;
    detail: string;
}
export interface RiskScore {
    level: RiskLevel;
    score: number;
    factors: RiskFactor[];
}
export interface TableStats {
    tableName: string;
    rowCount: number;
    totalBytes: number;
    indexCount: number;
}
export interface AffectedQuery {
    queryId: string;
    normalizedQuery: string;
    calls: number;
    meanExecTime: number;
    serviceName?: string;
}
/**
 * Score one statement's blast radius, 0-100:
 * - Lock severity (0-40 points) — always available
 * - Table size (0-30 points) — needs --database-url
 * - Query frequency (0-30 points) — needs --database-url
 *
 * Rule violations are not part of this — see `calculateOverallRisk` for the
 * migration-level number that weighs them.
 */
export declare function calculateRisk(lock: LockClassification, tableStats?: TableStats, affectedQueries?: AffectedQuery[]): RiskScore;
/** RED at 50, YELLOW at 25, GREEN below. */
export declare function levelFor(score: number): RiskLevel;
/**
 * The level to badge one statement's row with, in every report that draws one.
 *
 * Blast radius alone cannot reach RED without a database connection, so a
 * statement carrying a CRITICAL violation used to sit at YELLOW under a RED
 * headline. Readers took the row at its word and concluded nothing was urgent.
 * A row shows the worse of the two things known about that statement — what its
 * lock does, and what the rules found in it — and a violation only ever
 * escalates: warnings lift a clean statement to YELLOW and leave a brutal lock
 * where it is.
 *
 * This moves the badge, not the number. `calculateRisk` still scores blast
 * radius, and `--format json` still reports it, because a machine reading the
 * output wants the measurement rather than the signal.
 */
export declare function rowRiskLevel(risk: RiskLevel, violations: Array<{
    severity: Severity;
}>): RiskLevel;
/**
 * Score the migration as a whole — the number every headline shows.
 *
 * The worse of two tracks: the blast radius of the riskiest statement, and what
 * the rules found. A critical violation puts the migration at 70 or above so it
 * always reads RED; warnings alone stop at 45, because RED means "something
 * here is critical" and a pile of warnings is not that.
 */
export declare function calculateOverallRisk(statementRisks: RiskScore[], violations: Array<{
    severity: Severity;
}>): RiskScore;
//# sourceMappingURL=score.d.ts.map