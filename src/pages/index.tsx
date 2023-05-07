import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";

import Navbar from "~/components/ui/Navbar";
import { PokemonList } from "~/components/ui/PokmeonList";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Make-a-Dex</title>
        <meta name="description" content="Make your own Pokedex!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout></PageLayout>
    </>
  );
};

export default Home;
