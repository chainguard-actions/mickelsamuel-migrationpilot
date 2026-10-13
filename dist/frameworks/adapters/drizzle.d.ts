/**
 * Drizzle adapter — Tier 1 (full support).
 *
 * `drizzle-kit generate` writes SQL files into the `out` directory and records
 * the apply order in `meta/_journal.json`. The journal — not the filename — is
 * the source of truth for ordering, so it is read first and the filename order
 * is only a fallback.
 *
 * Drizzle's `--> statement-breakpoint` separators are SQL comments, so they
 * pass through the parser untouched.
 */
import type { Adapter } from './types.js';
export declare const drizzleAdapter: Adapter;
//# sourceMappingURL=drizzle.d.ts.map