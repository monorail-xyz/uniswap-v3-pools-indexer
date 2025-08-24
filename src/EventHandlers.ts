import {
  V3Pools,
  Pool,
} from "generated";

V3Pools.PoolCreated.handler(async ({ event, context }) => {

  const entity: Pool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tx: event.transaction.hash,
    created_via: event.transaction.to?.toLowerCase() || "",
    factory: event.srcAddress.toLowerCase(),
    pool: event.params.pool.toLowerCase(),
    token0: event.params.token0.toLowerCase(),
    token1: event.params.token1.toLowerCase(),
    fee: event.params.fee,
    tickSpacing: event.params.tickSpacing,
  };
  context.Pool.set(entity);

}, { wildcard: true });
