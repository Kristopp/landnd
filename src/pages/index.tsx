import React from "react";
import Head from "next/head";
import Index from "../components/header";
import Banner from "../components/banner/index";
import Card from "../components/card";
import fsPromises from 'fs/promises';
import path from 'path'

export type NearByProperty = {
    img: string;
    location: string;
    distance: string;
}

export type Props = {
    nearby: NearByProperty[];
}

export default function Home({nearby}: Props): React.ReactElement {

    console.log('sdas', nearby);

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
                     { nearby && nearby.map((item: NearByProperty) => (
                         <Card key={item.location} img={item.img} location={item.location} distance={item.distance} cardType="large"/>))}
                </div>
            </section>

            <section>
                <h2 className="text-4xl text-blue-50 font-semibold py-8">Popular picks</h2>


            </section>
        </main>
    </div>
  );
}

export async function getStaticProps() {
// Fetch local json data
    const filePath = path.join(process.cwd(), 'json', 'nearByData.json');
    const nearByData: Props = await fsPromises
    .readFile(filePath)
    .then((data) => JSON.parse(data.toString() || '[]') as Props);



    return {
        props: {
            nearby: nearByData,
        }
    };
}
