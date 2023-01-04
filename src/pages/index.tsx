import React from "react";
import Head from "next/head";
import NavBar from "../components/header";
import Banner from "../components/banner/index";
import Card from "../components/card";
import bottomBanner from "public/images/bottom-banner.jpg";

import fsPromises from 'fs/promises';
import path from 'path'

export type NearByProperty = {
    title: string;
    img: string;
    location: string;
    distance: string;
}

export type PopularPicks = {
    img: string;
    title: string;
}

export type Error = {
    statusCode: number;
}

export type Props = {
    nearby: NearByProperty[];
    popularPicks: PopularPicks[];
    error: Error
}

export default function Home({nearby, popularPicks, error}: Props): React.ReactElement {
// load handeling
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    , []);

    // Load page
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return <div>Something went wrong</div>
    }

    console.log('sdas', popularPicks);

  return (
    <div>
      <Head>
        <title>leanDnd</title>
      </Head>
      <NavBar />
      <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl text-blue-50 font-semibold pb-5">Find Nearby</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4">
                     { nearby && nearby?.map((item: NearByProperty) => (
                         <Card key={item.location} img={item.img} location={item.location} distance={item.distance} cardType="small"/>))}
                </div>
            </section>

            <section>
                <h2 className="text-4xl text-blue-50 font-semibold py-8">Popular picks</h2>
                <div className="flex space-x-3 overflow-auto scroll-smooth scrollbar-hide md:scroll-auto gap-3">
                { popularPicks && popularPicks?.map((item: PopularPicks) => (
                    <Card key={item.title} img={item.img} title={item.title} cardType="medium"/>))}
                </div>
            </section>
            
            <section>
                <Card img={bottomBanner} cardType={"large"} title={"Supper outdoors experience"}/>
            </section>
                
        </main>
    </div>
  );
}

export async function getStaticProps() {
    const filePathNearBy = path.join(process.cwd(), 'json', 'nearByData.json');
    const filePathPopular = path.join(process.cwd(), 'json', 'popularPicks.json');
     // Check if the file exists in the filesystem if not return error
    try {
        const nearby = await fsPromises.readFile(filePathNearBy, 'utf-8');
        const popularPicks = await fsPromises.readFile(filePathPopular, 'utf-8');

        return {
            props: {
                nearby: JSON.parse(nearby) as NearByProperty[],
                popularPicks: JSON.parse(popularPicks) as PopularPicks[],

            }
        }
    } catch (error) {
        return {
            props: {
                error: {
                    statusCode: 404
                }
            }
        }
    }

}
