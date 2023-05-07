import { Pokemon } from "@prisma/client";

import { api } from "~/utils/api"
import { PokemonCard } from "./Pokemon";

export const PokemonList: React.FC = () => {
  const { data, isLoading } = api.pokemon.list.useQuery();

  if (isLoading) return (
    <div>Loading...</div>
  )

  if (!data) return <div>404</div>

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  )
}