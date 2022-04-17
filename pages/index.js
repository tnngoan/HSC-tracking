import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
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
};