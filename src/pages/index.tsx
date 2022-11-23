import Head from "next/head";
import Header from "../components/header/Header";
import Banner from "../components/banner/index";
import urlConfig  from "./api/config";
import React from "react";

type PropertyProps = {
    img: string;
    location: string;
    distance: string;
}

type Props = {
    exploreData: PropertyProps[];
}

export default function Home({ exploreData }: Props): React.ReactElement {
    console.log('dasdas', exploreData);
  return (
    <div>
      <Head>
        <title>leanDnd</title>
      </Head>
      <Header />
      <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl text-blue-50 font-semibold pb-5">Find Nearby</h2>
                {exploreData?.map((item: PropertyProps) => {
                    return (
                        <h2 key={item.img}>{item.location}</h2>
                    )
                })}
            </section>
        </main>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: { exploreData: PropertyProps } }> {
    const exploreData = await fetch(urlConfig.localUrl).then(
        (res) => res.json() as Promise<PropertyProps>
    );
    return {
        props: {
            exploreData,
        }

    };
}
