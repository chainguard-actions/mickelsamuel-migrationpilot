/**
 * License key validation for MigrationPilot paid tiers.
 *
 * Key format: MP-<TIER>-<EXPIRY>-<BASE64URL_SIGNATURE>
 * Example:    MP-PRO-20261231-<ed25519-signature-base64url>
 *
 * - TIER: PRO, TEAM, or ENTERPRISE
 * - EXPIRY: YYYYMMDD date
 * - SIGNATURE: Ed25519 signature of "MP-<TIER>-<EXPIRY>" (base64url encoded)
 *
 * Validation uses asymmetric cryptography (Ed25519):
 * - Private key: server-only (Vercel webhook), used to SIGN license keys
 * - Public key: embedded in CLI, used to VERIFY license keys
 * - Even if someone extracts the public key, they CANNOT forge signatures
 */
export type LicenseTier = 'free' | 'pro' | 'team' | 'enterprise';
export interface LicenseStatus {
    valid: boolean;
    tier: LicenseTier;
    expiresAt?: Date;
    error?: string;
}
/**
 * Validates a license key and returns the license status.
 *
 * Reads from:
 * 1. Explicit key parameter
 * 2. MIGRATIONPILOT_LICENSE_KEY environment variable
 *
 * Returns { valid: true, tier: 'free' } if no key is provided (free tier).
 */
export declare function validateLicense(licenseKey?: string): LicenseStatus;
/**
 * Generate a license key for the given tier and expiry.
 * Used by the Stripe webhook handler to create keys after payment.
 *
 * Requires the Ed25519 private key (PEM format).
 * The private key is NEVER embedded in the CLI — it exists only on the server.
 */
export declare function generateLicenseKey(tier: Exclude<LicenseTier, 'free'>, expiresAt: Date, privateKeyPem?: string): string;
/**
 * Check if a license allows access to Pro features.
 */
export declare function isProOrAbove(status: LicenseStatus): boolean;
//# sourceMappingURL=validate.d.ts.map