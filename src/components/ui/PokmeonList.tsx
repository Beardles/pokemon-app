import { Pokemon } from "@prisma/client";
import Image from 'next/image';

import { api } from "~/utils/api"

const Pokemon: React.FC<Pokemon> = ({ id, name, image }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <img src={image} width={64} height={64} alt={name} />
    </div>
  )
}

export const PokemonList: React.FC = () => {
  const { data } = api.pokemon.list.useQuery();

  if (!data) return <div>404</div>

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((pokemon: Pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </div>
  )
}