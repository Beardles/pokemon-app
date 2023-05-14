import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokedexRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      name: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.pokedex.create({
        data: {
          name: input.name
        }
      })
    }),
});