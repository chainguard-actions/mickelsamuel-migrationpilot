/**
 * Fix classification for every MigrationPilot rule.
 *
 * Each rule falls into exactly one bucket:
 *
 * - `mechanical` — a deterministic, semantics-preserving rewrite of a single
 *   statement (or of the transaction wrapper around it). `--fix` applies these.
 * - `plan-only`  — the safe fix is a choreography: several statements that must
 *   land in a specific order, sometimes across separate deploys. `--fix` never
 *   touches these; `migrationpilot plan-fix` emits a numbered plan instead.
 * - `unfixable`  — the safe path depends on facts MigrationPilot cannot know
 *   (intent, data shape, release schedule). Reported with a safe alternative
 *   for a human to apply.
 *
 * The bar for `mechanical` is deliberately high: if a transform could change
 * what the migration means for any input, it is not mechanical. `MP038`
 * (int → bigint) is mechanical only because the rule fires on CREATE TABLE, so
 * there is never existing data to rewrite; the same change on an existing
 * column is a table rewrite and lives in the planner instead.
 *
 * A few `mechanical` rules also appear in `plan-fix`, because their one-line
 * fix leaves follow-up work: `--fix` adds `NOT VALID` to a constraint, and
 * `plan-fix` shows the matching `VALIDATE CONSTRAINT` step.
 */
export type FixClass = 'mechanical' | 'plan-only' | 'unfixable';
export interface RuleFixClassification {
    ruleId: string;
    fixClass: FixClass;
    /** One line on what `--fix` does, or why it stays out of it. */
    reason: string;
    /**
     * Imperative label for the rewrite, short enough for a menu item. Set on
     * every `mechanical` rule and on nothing else, so an editor offering the fix
     * can name it without keeping its own copy of the table.
     */
    fixTitle?: string;
}
/** Classification keyed by rule ID. */
export declare const FIX_CLASSIFICATION: ReadonlyMap<string, RuleFixClassification>;
/** All classifications, in rule-ID order. */
export declare const FIX_CLASSIFICATIONS: ReadonlyArray<RuleFixClassification>;
/** Rules `--fix` can rewrite. */
export declare const MECHANICAL_RULE_IDS: ReadonlySet<string>;
/** Rules `plan-fix` emits a choreography for. */
export declare const PLAN_ONLY_RULE_IDS: ReadonlySet<string>;
/** Rules that need a human. */
export declare const UNFIXABLE_RULE_IDS: ReadonlySet<string>;
/** How a rule is classified, or `unfixable` for an unknown ID. */
export declare function fixClassOf(ruleId: string): FixClass;
//# sourceMappingURL=classification.d.ts.map