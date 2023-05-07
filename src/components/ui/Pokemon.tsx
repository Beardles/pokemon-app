/* eslint-disable @next/next/no-img-element */
import { type Pokemon } from "@prisma/client"

export const PokemonCard: React.FC<Pokemon> = ({ id, name, image }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <img src={image} width={64} height={64} alt={name} />
    </div>
  )
}