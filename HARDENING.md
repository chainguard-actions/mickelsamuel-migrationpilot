<!-- markdownlint-disable -->

# Hardening Report: mickelsamuel--migrationpilot/v1.1.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **mickelsamuel--migrationpilot/v1.1.0** was hardened automatically. 2 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Multiple workflow files reference GitHub Actions using mutable version tags (e.g. @v4) instead of pinned full 40-character SHA commit hashes. This exposes the workflow to supply-chain attacks if the tag is moved to a malicious commit. Affected references: ci.yml — actions/checkout@v4, pnpm/action-setup@v4, actions/setup-node@v4; migration-check.yml — actions/checkout@v4, actions/setup-node@v4; publish.yml — actions/checkout@v4, pnpm/action-setup@v4, actions/setup-node@v4.

Locations:

- `.github/workflows/ci.yml:22`
- `.github/workflows/ci.yml:24`
- `.github/workflows/ci.yml:26`
- `.github/workflows/migration-check.yml:16`
- `.github/workflows/migration-check.yml:18`
- `.github/workflows/publish.yml:13`
- `.github/workflows/publish.yml:15`
- `.github/workflows/publish.yml:17`

### missing-permissions (severity: medium)

The workflow file ci.yml has no top-level `permissions:` key and no job-level `permissions:` key on any of its jobs. Without explicit permissions, the workflow inherits the repository default (typically write access to all scopes), violating the principle of least privilege. A `permissions:` block with minimal required scopes should be added.

Locations:

- `.github/workflows/ci.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Pinned all action references to full SHA hashes in all three workflow files: actions/checkout@v4 → @11d5960a326750d5838078e36cf38b85af677262, pnpm/action-setup@v4 → @b906affcce14559ad1aafd4ab0e942779e9f58b1, actions/setup-node@v4 → @49933ea5288caeca8642d1e84afbd3f7d6820020. Added top-level `permissions: contents: read` to ci.yml which had no permissions block. The migration-check.yml and publish.yml already had appropriate permissions blocks and were left unchanged in that regard.

