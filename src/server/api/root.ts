import { createTRPCRouter } from "~/server/api/trpc";
import { pokemonRouter } from "./routers/pokemon";
import { pokedexRouter } from "./routers/pokedex";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pokedex: pokedexRouter,
  pokemon: pokemonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
