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

    console.log('img', img);
  return (
    <div className={clsx(cardType === "small" && "flex flex-row" , "flex flex-col items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-transparent hover:scale-105 transition transform duration-300 ease-out")}>
        <div className={clsx(cardType === "small" && "relative h-24 w-40", cardType === 'medium' && 'relative h-80 w-80', cardType === "large" &&  "relative h-96 min-w-[400px]")}>
            <Image alt="Card image" src={img} fill={true} className="rounded-lg"/>
        </div>
        {cardType === "medium" && (
            <h3 className="text-2xl mt-3">{title}</h3>
        )}
        <div>
            <h2>{location}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  );
}

export default Card;
