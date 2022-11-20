import Head from "next/head";
import Header from "../components/header/Header";
import Banner from "../components/banner/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>leanDnd</title>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
