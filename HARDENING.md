<!-- markdownlint-disable -->

# Hardening Report: mickelsamuel--migrationpilot/v1.4.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **mickelsamuel--migrationpilot/v1.4.0** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Two `uses:` references in `.github/workflows/migration-check.yml` are pinned to mutable version tags instead of full 40-character commit SHAs, making them vulnerable to supply-chain attacks if the tag is moved: `actions/checkout@v4` (line 16) and `actions/setup-node@v4` (line 18). These should be pinned to their full SHA digests (e.g. `actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4`).

Locations:

- `.github/workflows/migration-check.yml:16`
- `.github/workflows/migration-check.yml:18`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned both mutable tag references in `.github/workflows/migration-check.yml` to full 40-character commit SHAs: `actions/checkout@v4` → `actions/checkout@11d5960a326750d5838078e36cf38b85af677262 # v4` (line 16) and `actions/setup-node@v4` → `actions/setup-node@49933ea5288caeca8642d1e84afbd3f7d6820020 # v4` (line 18). The `# v4` comments are retained for readability. No other findings were present.

