/**
 * Prisma adapter — Tier 1 (full support).
 *
 * `prisma migrate dev` writes plain SQL to
 * `prisma/migrations/<timestamp>_<name>/migration.sql`, and applies those
 * folders in timestamp (lexicographic) order. Both the schema location and the
 * migrations directory can be moved with `prisma.config.ts` or the `prisma`
 * key in package.json, so those are read before falling back to the default.
 */
import type { Adapter } from './types.js';
export declare const prismaAdapter: Adapter;
//# sourceMappingURL=prisma.d.ts.map