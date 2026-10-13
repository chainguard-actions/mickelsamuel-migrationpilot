/**
 * dbmate adapter — Tier 1 (full support).
 *
 * dbmate migrations are SQL files with `-- migrate:up` / `-- migrate:down`
 * sections. Only the up section is analyzed, with the rest blanked out so
 * violation line numbers still match the file.
 *
 * dbmate versions a migration by the leading digits of its filename, and
 * applies them in that order.
 */
import type { Adapter } from './types.js';
export declare const dbmateAdapter: Adapter;
//# sourceMappingURL=dbmate.d.ts.map