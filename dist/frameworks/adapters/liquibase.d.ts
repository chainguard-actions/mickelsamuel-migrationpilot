/**
 * Liquibase adapter — Tier 1 for formatted SQL, recipe for XML/YAML/JSON.
 *
 * A Liquibase changelog written in formatted SQL (`--liquibase formatted sql`)
 * is real SQL on disk: MigrationPilot reads it directly, and the `--changeset`
 * and `--rollback` annotations are comments, so the rollback half is ignored by
 * construction.
 *
 * XML, YAML and JSON changelogs are a different story. They describe changes
 * abstractly (`<addColumn>`, `<createIndex>`), and the SQL only exists once
 * Liquibase renders it for a specific database. MigrationPilot does not guess
 * at that rendering — it says so and gives you the command that produces it.
 */
import type { Adapter } from './types.js';
export declare const liquibaseAdapter: Adapter;
//# sourceMappingURL=liquibase.d.ts.map