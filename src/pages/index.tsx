import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Make-a-Dex</title>
        <meta name="description" content="Make your own Pokedex!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div>Make-a-Dex</div>
      </PageLayout>
    </>
  );
};

export default Home;
