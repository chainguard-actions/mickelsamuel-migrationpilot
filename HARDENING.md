<!-- markdownlint-disable -->

# Hardening Report: mickelsamuel--migrationpilot/v1.6.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **mickelsamuel--migrationpilot/v1.6.0** was hardened automatically. 4 finding(s) were identified and resolved across 2 iteration(s).

## Findings Fixed

### script-injection (severity: high)

Sub-rule (a): `${{ steps.version.outputs.version }}` is directly interpolated inside a `run:` shell command. The expression `steps.*.outputs.*` is a workflow-controllable context that flows through YAML template substitution before the shell sees it. Offending line: `jq --arg v "${{ steps.version.outputs.version }}" \`

Locations:

- `.github/workflows/publish.yml:121`

### script-injection (severity: high)

Sub-rule (a): `${{ github.repository_owner }}` is directly interpolated inside a `run:` shell command (git clone URL). The `github.*` context flows through YAML template substitution before the shell sees it. Offending line: `"https://x-access-token:${TAP_TOKEN}@github.com/${{ github.repository_owner }}/homebrew-migrationpilot.git" tap`

Locations:

- `.github/workflows/publish.yml:248`

### script-injection (severity: high)

Sub-rule (a): `${{ github.repository }}` is directly interpolated inside a `run:` shell command (gh api URL). The `github.*` context flows through YAML template substitution before the shell sees it. Offending line: `listing=$(gh api "repos/${{ github.repository }}/contents/dist/action?ref=$ref")`

Locations:

- `.github/workflows/release-action.yml:183`

### unpinned-uses (severity: high)

The `uses:` reference `mickelsamuel/migrationpilot@v1` uses a mutable tag (`v1`) instead of a full 40-character commit SHA. A tag can be moved to point at a different (potentially malicious) commit, enabling supply-chain attacks.

Locations:

- `.github/workflows/release-action.yml:208`

## Iteration Notes

### Iteration 1

**Fixes applied:** script-injection, unpinned-uses

**Notes:**

Fixed 3 script injection findings by moving ${{ }} expressions from run: shell commands into env: blocks: (1) steps.version.outputs.version in publish.yml Set version in server.json step → VERSION_OUTPUT env var; (2) github.repository_owner in publish.yml Push to the tap step → REPO_OWNER env var; (3) github.repository in release-action.yml smoke job → REPOSITORY env var. Fixed 1 unpinned-uses finding by pinning mickelsamuel/migrationpilot@v1 to its full commit SHA 5e91d56c75e485c93cc0dd8a1fcbacfd71432113 with a # v1 comment.

### Iteration 2

**Fixes applied:** script-injection

**Notes:**

Fixed unquoted variable expansion in the `smoke` job's 'The bundle is served from the release tags' step in `.github/workflows/release-action.yml`. Changed `for ref in $TAG $MAJOR; do` to `for ref in "$TAG" "$MAJOR"; do` to prevent word-splitting and shell metacharacter injection from the workflow-controllable values `${{ github.ref_name }}` and `${{ needs.tag-dist.outputs.major-tag }}`.

