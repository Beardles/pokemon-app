import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ page: z.number() }))
    .query(async ({ input }) => {
      // We are showing 20 pokemon per page so we will offset using page - 1
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(input.page - 1) * 20}&limit=20`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new TRPCError({
            message: 'Unable to fetch pokemon.',
            code: 'INTERNAL_SERVER_ERROR'
        });
      }

      const data = response.json();

      return {
        
      }
    }),
    
});
