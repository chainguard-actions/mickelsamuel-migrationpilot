/**
 * Sqitch adapter — Tier 1 (full support).
 *
 * Sqitch deploy scripts are plain SQL, but their order lives in `sqitch.plan`,
 * not in the filenames — so the plan is parsed and used as the ordering source.
 * Deploy scripts that the plan does not mention are reported as skipped, since
 * Sqitch would never deploy them.
 *
 * Plan format (from the Sqitch tutorial):
 *   %syntax-version=1.0.0
 *   %project=flipr
 *   users [appschema] 2013-12-30T23:49:00Z Marge <marge@example.com> # note
 *   @v1.0.0-dev1 2013-12-31T00:01:22Z Marge <marge@example.com> # tag
 */
import type { Adapter } from './types.js';
export declare const sqitchAdapter: Adapter;
/** Change names from a plan, in plan order. Pragmas, tags, and comments are skipped. */
export declare function parsePlan(plan: string): string[];
//# sourceMappingURL=sqitch.d.ts.map