import React from 'react';
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";

type CardType = "large" | "medium" | "small";

type CardProps = {
    title?: string
    img: string | StaticImageData;
    location?: string;
    distance?: string;
    cardType: CardType;
}

function Card({title, img, location, distance, cardType }: CardProps): JSX.Element {
    //I need title to be optional, but I need to pass it in as a prop

    //I need card size change according to the cardType prop

  return (
    <div className={clsx(cardType === "small" && "flex flex-col items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-transparent hover:scale-105 transition transform duration-300 ease-out" , cardType === 'medium' && "flex flex-col m-6 hover:scale-105 transition transform duration-300 ease-out", cardType === 'large' && "relative cursor-pointer")}>
        <div className={clsx(cardType === "small" && "relative h-24 w-40", cardType === 'medium' && 'relative h-80 w-80', cardType === "large" &&  "relative h-96 min-w-[300px]")}>
            <Image alt="Card image" src={img} fill={true} className="rounded-lg object-fit-cover h-full w-full"/>
            {cardType === "large" && (
                <div className="absolute text-2xl top-16 left-12 mt-3 text-start z-10 "><h3 className="text-4xl mb-3 w-[300px]">{title}</h3><p>Explore our outdoor options</p>
                <button className="text-white text-sm border border-2 border-white bg-black px-6 py-2 rounded-lg mt-5  hover:scale-105 transition transform duration-300 ease-out">Explore</button>
                </div>

            )}
        </div>

        {cardType === "medium" && (
            <h3 className="text-2xl mt-3 text-center">{title}</h3>
        )}

        {cardType === "small" && (
            <div>
                <h2 className="text-center my-1">{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        )}

    </div>
  );
}

export default Card;
