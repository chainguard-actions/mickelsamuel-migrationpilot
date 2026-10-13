import type { Rule } from './engine.js';
/**
 * MP082: warn-not-enforced-constraint
 *
 * PostgreSQL 18 introduced NOT ENFORCED constraints. These exist in metadata
 * but the database does NOT actually enforce them. Warn users so they
 * understand that invalid data CAN be inserted.
 *
 * Uses regex on originalSql because libpg-query-wasm (PG16/17 based)
 * cannot parse PG18 NOT ENFORCED syntax. When the parser is upgraded,
 * this rule can be enhanced with AST-based detection.
 *
 * NOTE: If NOT ENFORCED appears in a multi-statement file, the current
 * parser may fail to parse the entire file. The analysis pipeline includes
 * a raw SQL fallback (checkRawPg18Patterns) that catches this case.
 */
export declare const warnNotEnforcedConstraint: Rule;
//# sourceMappingURL=MP082-warn-not-enforced-constraint.d.ts.map