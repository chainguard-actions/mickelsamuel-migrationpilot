/**
 * TypeORM / Sequelize / Knex adapters — Tier 2 (static extraction).
 *
 * These migrations are JavaScript or TypeScript. Raw SQL passed to
 * `queryRunner.query(...)`, `knex.raw(...)` or `sequelize.query(...)` as a
 * plain string literal is extracted and analyzed for real. Anything the file
 * builds at runtime — interpolated templates, concatenation, schema-builder
 * calls — is reported per file with the reason, never silently dropped and
 * never guessed at.
 */
import type { Adapter } from './types.js';
export declare const typeormAdapter: Adapter;
export declare const sequelizeAdapter: Adapter;
export declare const knexAdapter: Adapter;
//# sourceMappingURL=js-migrations.d.ts.map