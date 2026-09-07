import type { Rule } from './engine.js';
/**
 * MP070: warn-concurrent-index-invalid
 *
 * CREATE INDEX CONCURRENTLY can fail and leave an INVALID index behind.
 * Before retrying, you must DROP the invalid index. Without a preceding
 * DROP INDEX IF EXISTS, a retry will fail with "index already exists".
 *
 * Best practice: always include DROP INDEX IF EXISTS before
 * CREATE INDEX CONCURRENTLY to handle retries cleanly.
 */
export declare const warnConcurrentIndexInvalid: Rule;
//# sourceMappingURL=MP070-warn-concurrent-index-invalid.d.ts.map