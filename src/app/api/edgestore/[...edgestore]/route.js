import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { z } from "zod";
const es = initEdgeStore.create();
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es
    .imageBucket({
      maxSize: 1024 * 1024 * 5, // 5MB
    })
    .input(
      z.object({
        type: z.enum(["blog"]),
      })
    )
    .path(({ input }) => [{ type: input.type }]),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
export { handler as GET, handler as POST, edgeStoreRouter };
/**
 * This type is used to create the type-safe client for the frontend.
 */
// export default edgeStoreRouter;
