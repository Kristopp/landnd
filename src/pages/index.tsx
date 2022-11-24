import React from "react";
import Head from "next/head";
import Index from "../components/header";
import Banner from "../components/banner/index";
import Card from "../components/card/index";
import useSwr, {SWRResponse} from "swr";

export type NearByData = {
    img: string;
    location: string;
    distance: string;
}


// swr
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home(): React.ReactElement {
    const { data, error } = useSwr<NearByData[], Error>(`/api/landingPage`, fetcher);

    console.log('data', data);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


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
                    {data.map((item:NearByData) => {
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

/*export async function getStaticProps(): Promise<{ props: { exploreData: PropertyProps } }> {
    console.log('server', server);
    const exploreData = await fetch('/api/landingPage').then(
        (res) => res.json() as Promise<PropertyProps>
    );
    return {
        props: {
            exploreData,
        }

    };
}*/
