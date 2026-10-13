/**
 * MP103: warn-replication-lag-risk
 *
 * A WAL-heavy operation on a large table while standbys are connected. Replicas
 * replay WAL in a single stream, so a burst that the primary writes in parallel
 * arrives at the replica as serial work — read replicas fall behind, and
 * anything reading from them serves stale data until they catch up.
 *
 * Production-context rule: silent without --database-url, because it needs to
 * know that replicas exist.
 */
import type { Rule } from './engine.js';
export declare const warnReplicationLagRisk: Rule;
//# sourceMappingURL=MP103-warn-replication-lag-risk.d.ts.map