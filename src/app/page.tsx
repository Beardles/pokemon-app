import { type NextPage } from "next"

import { PokemonList } from "~/components/ui/PokmeonList";

const HomePage: NextPage = () => {
  return (
    <>
      <div>Home Page</div>
      <PokemonList />
    </>
  )
}

export default HomePage;