/**
 * Next-step suggestions for CLI output.
 *
 * After displaying violations, suggest concrete next steps
 * based on what was found. Inspired by Rust compiler messages.
 */
import type { RuleViolation } from '../rules/engine.js';
/**
 * Generate next-step suggestions based on violations found.
 */
export declare function generateSuggestions(violations: RuleViolation[], file?: string): string[];
/**
 * Format a Rust-style error box for a violation.
 */
export declare function formatRichError(violation: RuleViolation, sql?: string): string[];
//# sourceMappingURL=suggestions.d.ts.map