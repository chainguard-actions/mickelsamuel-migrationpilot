import type { Rule } from './engine.js';
/**
 * MP081: prefer-pg18-not-null-not-valid
 *
 * On PostgreSQL 18+, a NOT NULL constraint can be added NOT VALID by name and
 * validated later with VALIDATE CONSTRAINT. Detects the old
 * CHECK (col IS NOT NULL) NOT VALID workaround and suggests the simpler
 * PG18 approach.
 *
 * Does NOT overlap with MP002 (which catches bare SET NOT NULL).
 * MP081 catches the old workaround that is no longer needed on PG18+.
 */
export declare const preferPg18NotNullNotValid: Rule;
//# sourceMappingURL=MP081-prefer-pg18-not-null-not-valid.d.ts.map