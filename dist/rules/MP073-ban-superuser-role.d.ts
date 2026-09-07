import type { Rule } from './engine.js';
/**
 * MP073: ban-superuser-role
 *
 * Migrations should not use SUPERUSER privileges. Operations that require
 * SUPERUSER (ALTER SYSTEM, CREATE ROLE WITH SUPERUSER, LOAD) indicate
 * the migration is running with excessive privileges — a security risk
 * and incompatible with managed database services (RDS, Cloud SQL, etc.).
 */
export declare const banSuperuserRole: Rule;
//# sourceMappingURL=MP073-ban-superuser-role.d.ts.map