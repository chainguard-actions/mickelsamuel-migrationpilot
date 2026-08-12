/**
 * SSO authentication for MigrationPilot Enterprise.
 *
 * Provides device code flow for CLI authentication:
 * 1. User runs `migrationpilot login`
 * 2. CLI generates a device code and shows a URL
 * 3. User opens URL in browser and authenticates via SSO
 * 4. CLI polls for completion and stores the auth token
 *
 * Supports:
 * - SAML 2.0 (via WorkOS)
 * - OIDC (via WorkOS)
 * - Email/password fallback
 *
 * Token is stored in ~/.migrationpilot/auth.json
 */
export interface AuthToken {
    /** Access token for API requests */
    accessToken: string;
    /** Token expiry timestamp */
    expiresAt: string;
    /** User email */
    email: string;
    /** Organization ID */
    orgId?: string;
    /** Organization name */
    orgName?: string;
    /** Authentication method used */
    method: 'sso' | 'email' | 'api-key';
}
export interface DeviceCodeResponse {
    /** The device code for polling */
    deviceCode: string;
    /** The code the user enters in the browser */
    userCode: string;
    /** The URL the user should visit */
    verificationUrl: string;
    /** How often to poll (seconds) */
    interval: number;
    /** When the code expires */
    expiresAt: string;
}
export interface SSOConfig {
    /** MigrationPilot API base URL */
    apiUrl?: string;
    /** WorkOS client ID (set by org admin) */
    clientId?: string;
    /** Organization connection ID for SSO */
    connectionId?: string;
}
/**
 * Read the stored auth token.
 * Returns null if not authenticated or token is expired.
 */
export declare function getAuthToken(): Promise<AuthToken | null>;
/**
 * Store an auth token to disk.
 */
export declare function saveAuthToken(token: AuthToken): Promise<void>;
/**
 * Remove the stored auth token (logout).
 */
export declare function clearAuthToken(): Promise<void>;
/**
 * Generate a device code for the login flow.
 * In production, this calls the MigrationPilot API.
 */
export declare function generateDeviceCode(): DeviceCodeResponse;
/**
 * Initiate the device code flow against the MigrationPilot API.
 * Returns the device code response for the user to authenticate.
 */
export declare function initiateDeviceFlow(config?: SSOConfig): Promise<DeviceCodeResponse>;
/**
 * Poll the API for device code completion.
 * Returns the auth token when the user completes authentication.
 */
export declare function pollDeviceCode(deviceCode: string, config?: SSOConfig): Promise<AuthToken | null>;
/**
 * Validate an API key for non-SSO authentication.
 */
export declare function validateApiKey(apiKey: string, config?: SSOConfig): Promise<AuthToken | null>;
/**
 * Check if the user is currently authenticated.
 */
export declare function isAuthenticated(): Promise<boolean>;
/**
 * Get the current user's organization info from the stored token.
 */
export declare function getOrgInfo(): Promise<{
    orgId?: string;
    orgName?: string;
    email: string;
} | null>;
//# sourceMappingURL=sso.d.ts.map