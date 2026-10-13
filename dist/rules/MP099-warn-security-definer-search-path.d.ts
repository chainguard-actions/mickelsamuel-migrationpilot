import type { Rule } from './engine.js';
/**
 * MP099: warn-security-definer-search-path
 *
 * A SECURITY DEFINER function runs with the privileges of its owner. If it
 * does not pin search_path, the caller controls how every unqualified name
 * inside the body resolves — and the caller is the one who does not have
 * those privileges.
 *
 * The attack is direct: create a table (or function) named to shadow one the
 * body references, put it first on your own search_path, call the function,
 * and the owner's privileges execute against your object.
 *
 *   SET search_path = evil, public;
 *   SELECT admin_only_function();   -- body's "users" resolves to evil.users
 *
 * The fix is a SET search_path clause on the function itself, which pins
 * resolution for the duration of the call regardless of the caller.
 *
 * PostgreSQL accepts the unpinned form without complaint, which is why this
 * has to be caught in review.
 */
export declare const warnSecurityDefinerSearchPath: Rule;
//# sourceMappingURL=MP099-warn-security-definer-search-path.d.ts.map