import Head from "next/head";
import { Header, Footer, Main } from "../components/layout";

function Home() {
  return (
    <div>
      <Head>
        <title>Hup Soon Cheong</title>
        <meta name="description" content="Hup Soon Cheong Service Ltd" />
        <link rel="icon" href="../../assets/images/logo.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
