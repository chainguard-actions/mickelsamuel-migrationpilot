import type { Rule } from './engine.js';
/**
 * MP076: warn-xid-consuming-retry
 *
 * SAVEPOINT creates a subtransaction that consumes a separate XID.
 * In migration files with retry loops using SAVEPOINT/ROLLBACK TO,
 * each retry consumes another XID. On high-throughput systems, this
 * can accelerate XID wraparound risk.
 *
 * SAVEPOINT is also expensive: each one allocates a new snapshot and
 * adds overhead to the transaction state machine.
 */
export declare const warnXidConsumingRetry: Rule;
//# sourceMappingURL=MP076-warn-xid-consuming-retry.d.ts.map