import { type Pokemon } from "@prisma/client";

import { prisma } from "~/config/db";

import { PokemonCard } from "./Pokemon";

export const PokemonList: Promise<React.FC> = async () => {
  const data = await prisma.pokemon.findMany();


  if (!data) return <div>404</div>

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  )
}