import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/Navbar";
import { PokemonList } from "~/components/ui/PokmeonList";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Make-a-Dex</title>
        <meta name="description" content="Make your own Pokedex!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-900 to-yellow-500">
        <Navbar />
        <div className="container mx-auto">
          <PokemonList />
        </div>
      </main>
    </>
  );
};

export default Home;
