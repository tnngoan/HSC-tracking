import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

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

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/cards");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Home;
