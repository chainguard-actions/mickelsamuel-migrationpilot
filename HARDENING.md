<!-- markdownlint-disable -->

# Hardening Report: mickelsamuel--migrationpilot/v1.6.1

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **mickelsamuel--migrationpilot/v1.6.1** was hardened automatically. 2 finding(s) were identified and resolved across 2 iteration(s).

## Findings Fixed

### script-injection (severity: high)

Sub-rule (a): Three `run:` blocks directly interpolate `${{ }}` expressions into shell commands, enabling script injection.

1. `.github/workflows/publish.yml` (~line 127): `jq --arg v "${{ steps.version.outputs.version }}"` — the step output is interpolated directly into the shell command string before the shell sees it.

2. `.github/workflows/publish.yml` (~line 325): `"https://x-access-token:${TAP_TOKEN}@github.com/${{ github.repository_owner }}/homebrew-migrationpilot.git"` — `github.repository_owner` is interpolated directly into a shell string inside a `run:` block.

3. `.github/workflows/release-action.yml` (line 201): `listing=$(gh api "repos/${{ github.repository }}/contents/dist/action?ref=$ref")` — `github.repository` is interpolated directly into a shell command string.

Sub-rule (b): In the same `release-action.yml` smoke job run block (line 198), `for ref in $TAG $MAJOR; do` uses unquoted expansions of `$TAG` and `$MAJOR`, which are env vars set from `${{ github.ref_name }}` and `${{ needs.tag-dist.outputs.major-tag }}` respectively. Unquoted expansion allows shell metacharacter injection.

Locations:

- `.github/workflows/publish.yml:127`
- `.github/workflows/publish.yml:325`
- `.github/workflows/release-action.yml:201`
- `.github/workflows/release-action.yml:198`

### unpinned-uses (severity: high)

`.github/workflows/release-action.yml` contains a `uses:` reference pinned to a mutable tag rather than a full 40-character commit SHA. The reference `uses: mickelsamuel/migrationpilot@v1` (line 223) uses the `v1` tag, which can be moved to point at any commit, enabling supply-chain attacks if the referenced repository is compromised or the tag is force-pushed.

Locations:

- `.github/workflows/release-action.yml:223`

## Iteration Notes

### Iteration 1

**Fixes applied:** script-injection, unpinned-uses

**Notes:**

Fixed 5 issues across 2 files:

1. publish.yml line 127: Moved `${{ steps.version.outputs.version }}` to step env block as STEP_VERSION.
2. publish.yml line 325: Moved `${{ github.repository_owner }}` to step env block as REPO_OWNER.
3. release-action.yml line 201: Moved `${{ github.repository }}` to step env block as REPOSITORY.
4. release-action.yml line 198: Replaced unquoted `for ref in $TAG $MAJOR` with a bash array approach that properly quotes values and skips empty MAJOR for prereleases.
5. release-action.yml line 223: Pinned `mickelsamuel/migrationpilot@v1` to full SHA `bab9820b97f274ca82b808790d4dd667e1c72b93 # v1`.

### Iteration 1

**Fixes applied:** github-env-injection

**Notes:**

In the `tag-dist` job's 'Commit the bundle and move the tags' step, added sanitization of the MAJOR variable (derived from github.ref_name) before writing it to $GITHUB_OUTPUT. The fix introduces `safe_major="$(printf '%s' "$MAJOR" | tr -d '\n\r')"` and uses `safe_major` in the `echo "major=$safe_major" >> "$GITHUB_OUTPUT"` line, stripping any embedded newlines or carriage returns as required by the check rules.

