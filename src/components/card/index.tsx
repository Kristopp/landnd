import React from 'react';
import Image from "next/image";

type CardType = "large" | "medium" | "small";

type CardProps = {
    img: string;
    location: string;
    distance: string;
    cardType: CardType;
}

function Card({ img, location, distance, cardType }: CardProps): JSX.Element {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-24 w-40">
            <Image alt="Card image" src={img} fill={true} className="rounded-lg"/>
        </div>
        <div>
            <h2>{location}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  );
}

export default Card;
