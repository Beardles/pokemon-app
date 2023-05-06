import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";

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
        <div className="container">
        </div>
      </main>
    </>
  );
};

export default Home;
