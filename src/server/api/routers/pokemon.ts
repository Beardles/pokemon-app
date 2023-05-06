import { Prisma, type Pokemon, type PrismaPromise } from "@prisma/client";
import { MaybePromise } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  list: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.pokemon.findMany();
    }),
    
});
