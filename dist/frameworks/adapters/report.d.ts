/**
 * Human-readable reporting for adapter results.
 *
 * Every line here exists to answer one of two questions the user should never
 * have to guess at: "what did it just analyze?" and "what did it not analyze,
 * and why?".
 */
import type { AdapterResult } from './types.js';
/** One line: what was detected, how much of it is being analyzed, and from where. */
export declare function formatAdapterBanner(result: AdapterResult): string;
/** Ordering rule, adapter notes, per-file notes, and the honest skip list. */
export declare function formatAdapterDetails(result: AdapterResult): string;
/** The "here is how to produce the SQL" block for Tier-2 frameworks. */
export declare function formatRecipe(result: AdapterResult): string;
//# sourceMappingURL=report.d.ts.map