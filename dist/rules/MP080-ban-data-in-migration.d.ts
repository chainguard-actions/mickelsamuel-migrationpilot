import type { Rule } from './engine.js';
/**
 * MP080: ban-data-in-migration
 *
 * DDL migration files should not contain data manipulation statements
 * (INSERT, UPDATE, DELETE). Mixing DDL and DML in the same migration:
 *
 * 1. Makes rollbacks harder (data changes can't be undone with DDL rollback)
 * 2. Increases lock duration (DML + DDL in same transaction)
 * 3. Violates separation of concerns (schema changes vs data changes)
 *
 * Data migrations should be in separate files with their own rollback strategy.
 */
export declare const banDataInMigration: Rule;
//# sourceMappingURL=MP080-ban-data-in-migration.d.ts.map