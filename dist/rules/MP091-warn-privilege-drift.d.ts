import type { Rule } from './engine.js';
/**
 * MP091: warn-privilege-drift
 *
 * GRANT and REVOKE buried inside a schema migration are how an access model
 * stops matching what anyone believes it to be. The privilege change is
 * invisible in a diff full of DDL, it is not covered by whatever review the
 * team applies to access requests, and there is no single place left that
 * describes who can read what — the answer is spread across every migration
 * ever merged.
 *
 * The same separation MP080 asks for between schema and data applies here
 * between schema and access control.
 */
export declare const warnPrivilegeDrift: Rule;
//# sourceMappingURL=MP091-warn-privilege-drift.d.ts.map