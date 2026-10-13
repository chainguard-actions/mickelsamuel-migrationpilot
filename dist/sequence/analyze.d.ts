/**
 * Sequence-level analysis — the migration directory as one deploy.
 *
 * Per-file analysis answers "is this migration safe?". A release is rarely one
 * file, and the hazards that take production down live between them: four
 * migrations that each hold a short lock on the same hot table, an index built
 * in one file and thrown away by a rewrite two files later, a migration that
 * uses a table the next file creates.
 *
 * Findings get their own ID space, SQ001–SQ005, so they never collide with the
 * per-statement MP rules:
 *
 * - SQ001 cumulative-lock-budget — blocking lock time stacked up on one table
 * - SQ002 hot-table-multi-touch  — one table locked by N files in one deploy
 * - SQ003 create-then-rewrite    — an index/constraint built, then rewritten away
 * - SQ004 ordering-hazard        — a file uses an object a later file creates
 * - SQ005 blast-radius           — the summary (not a violation)
 *
 * Note: this is about the *sequence of migration files*. For PostgreSQL
 * SEQUENCE objects and overflow risk, see ./monitor.ts.
 */
import type { LockClassification, LockLevel } from '../locks/classify.js';
import type { Severity } from '../rules/engine.js';
export type SequenceFindingId = 'SQ001' | 'SQ002' | 'SQ003' | 'SQ004';
export type SequenceCheckId = SequenceFindingId | 'SQ005';
export interface SequenceInput {
    /** Path of the migration file, used for display and ordering. */
    path: string;
    /** File contents. */
    sql: string;
}
export interface SequenceOptions {
    /** Target PostgreSQL version — some locks are version-dependent. Default 17. */
    pgVersion?: number;
    /** Blocking lock seconds allowed per table across the sequence. Default 60. */
    lockBudgetSeconds?: number;
    /** Distinct files touching one table before SQ002 fires. Default 3. */
    hotTableFileThreshold?: number;
    /** Row counts per table, when production context is available, to sharpen estimates. */
    rowCounts?: Map<string, number>;
}
export interface SequenceFinding {
    id: SequenceFindingId;
    /** Stable kebab-case name, mirroring how MP rules are named. */
    name: string;
    severity: Severity;
    message: string;
    /** Files involved, in sequence order. */
    files: string[];
    /** Table the finding is about, when it is about one table. */
    table?: string;
    /** Supporting numbers — the evidence behind the message. */
    detail?: string;
}
export interface TableBlastRadius {
    table: string;
    /** Files that touch this table, in sequence order. */
    files: string[];
    /** Statements across the sequence that touch it. */
    statements: number;
    /** Statements that block reads or writes. */
    blockingStatements: number;
    worstLock: LockLevel;
    /** Whether the worst lock is held for a scan or rewrite rather than momentarily. */
    worstLockLongHeld: boolean;
    /** File holding the worst lock. */
    worstLockFile: string;
    /** Summed blocking lock time across the sequence, in seconds. */
    estimatedLockSeconds: number;
    /** Distinct operations applied, e.g. "ALTER TABLE", "CREATE INDEX". */
    operations: string[];
}
/** SQ005 — what this deploy touches and what it costs. */
export interface SequenceBlastRadius {
    tables: TableBlastRadius[];
    totalEstimatedLockSeconds: number;
    /**
     * `measured` when row counts were supplied and the estimate is calibrated to
     * real table sizes, `heuristic` when it falls back to per-operation defaults.
     */
    estimateBasis: 'measured' | 'heuristic';
}
export interface SequenceAnalysis {
    /** File names in sequence order. */
    files: string[];
    fileCount: number;
    statementCount: number;
    findings: SequenceFinding[];
    blastRadius: SequenceBlastRadius;
    /** Files that could not be parsed, and were left out of the analysis. */
    parseErrors: Array<{
        file: string;
        error: string;
    }>;
    /** Thresholds the run used, echoed so a report explains its own numbers. */
    thresholds: {
        lockBudgetSeconds: number;
        hotTableFileThreshold: number;
    };
}
export declare const DEFAULT_LOCK_BUDGET_SECONDS = 60;
export declare const DEFAULT_HOT_TABLE_FILE_THRESHOLD = 3;
/** Metadata for every check in the SQ space, for docs and JSON consumers. */
export declare const SEQUENCE_CHECKS: Record<SequenceCheckId, {
    name: string;
    kind: 'finding' | 'summary';
    description: string;
}>;
/**
 * Seconds this statement is expected to hold a lock that blocks other sessions.
 *
 * Non-blocking work costs nothing here however long it runs — an hour-long
 * CREATE INDEX CONCURRENTLY does not spend the lock budget.
 */
export declare function estimateLockSeconds(stmt: Record<string, unknown>, lock: LockClassification, rowCount?: number): number;
/**
 * Analyze an ordered set of migration files as one deploy.
 *
 * The order of `inputs` is the order the migrations will be applied — the
 * caller sorts, this does not re-sort.
 */
export declare function analyzeSequence(inputs: SequenceInput[], options?: SequenceOptions): Promise<SequenceAnalysis>;
/** Seconds as a short human string: "45s", "2m 30s", "1h 5m". */
export declare function formatSeconds(seconds: number): string;
//# sourceMappingURL=analyze.d.ts.map