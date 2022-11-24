import React from "react";
import Head from "next/head";
import Index from "../components/header";
import Banner from "../components/banner/index";
import Card from "../components/card/index";
import urlConfig  from "./api/config";

export type PropertyProps = {
    img: string;
    location: string;
    distance: string;
}

export type Props = {
    exploreData: PropertyProps[];
}

export default function Home({ exploreData }: Props): React.ReactElement {
    console.log('dasdas', exploreData);
  return (
    <div>
      <Head>
        <title>leanDnd</title>
      </Head>
      <Index />
      <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl text-blue-50 font-semibold pb-5">Find Nearby</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4">
                    {exploreData?.map((item: PropertyProps) => {
                        return (
                            <Card
                                key={item.location}
                                cardType="small"
                                img={item.img}
                                location={item.location}
                                distance={item.distance}
                            />
                        )
                    })}
                </div>
            </section>

            <section>
                <h2 className="text-4xl text-blue-50 font-semibold py-8">Popular picks</h2>


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
