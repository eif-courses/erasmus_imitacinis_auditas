import {createTRPCRouter} from "~/server/api/trpc";
import {exampleRouter} from "~/server/api/routers/example";
import {documentRouter} from "~/server/api/routers/documents";
import {penWorldServiceRouter} from "~/server/api/routers/penworldservice";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    example: exampleRouter,
    penworldservice: penWorldServiceRouter,
    documents: documentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
