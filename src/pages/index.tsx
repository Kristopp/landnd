import Head from "next/head";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>leanDnd</title>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Banner*/}
    </div>
  );
}
