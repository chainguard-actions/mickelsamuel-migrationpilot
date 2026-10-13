/**
 * goose adapter — Tier 1 (full support).
 *
 * goose keeps the up and down migration in one SQL file, separated by
 * `-- +goose Up` / `-- +goose Down`. Only the up half is analyzed; the down
 * half is blanked out so violation line numbers still match the file.
 *
 * Ordering is by the numeric prefix of the filename, which is what goose sorts
 * on — timestamps (`20170506082420_x.sql`) or sequence numbers (`00001_x.sql`).
 */
import type { Adapter } from './types.js';
export declare const gooseAdapter: Adapter;
//# sourceMappingURL=goose.d.ts.map