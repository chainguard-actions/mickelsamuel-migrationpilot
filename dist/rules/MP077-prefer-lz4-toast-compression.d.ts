import type { Rule } from './engine.js';
/**
 * MP077: prefer-lz4-toast-compression
 *
 * PostgreSQL 14+ supports lz4 TOAST compression, which is significantly
 * faster than the default pglz. For columns with TOAST-heavy data
 * (TEXT, JSONB, BYTEA), using lz4 reduces compression/decompression
 * overhead with minimal size tradeoff.
 *
 * Detects ALTER TABLE ALTER COLUMN SET COMPRESSION pglz and
 * SET default_toast_compression = 'pglz'.
 */
export declare const preferLz4ToastCompression: Rule;
//# sourceMappingURL=MP077-prefer-lz4-toast-compression.d.ts.map