import type { Rule } from './engine.js';
/**
 * MP078: warn-extension-version-pin
 *
 * CREATE EXTENSION without a VERSION clause installs whatever version
 * happens to be the default on the server. This makes migrations
 * non-reproducible across environments and can cause unexpected behavior
 * when servers have different default versions.
 *
 * Always pin the extension version for reproducibility.
 */
export declare const warnExtensionVersionPin: Rule;
//# sourceMappingURL=MP078-warn-extension-version-pin.d.ts.map