import React from 'react';
import Image from "next/image";
import BannerPic from "public/images/banner.jpg";

function Banner(): JSX.Element {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl-[600px] 2xl:h-[700px]">
        <Image src={BannerPic} alt="Banner" fill={true}/>
        <div className="absolute top-1/2 w-full text-center ">
            <p className="text-sm sm:text-lg text-black font-semibold backdrop-blur border-y-2 border-black md:shadow-md">Looking for adventure?</p>
            <button className="text-black border-2 border-black backdrop-blur font-bold px-12 py-4 mt-4 shadow-md rounded-full md:shadow-md hover:shadow-xl active:scale-90 transition duration-150">
                We can help
            </button>
        </div>
    </div>
  );
}

export default Banner;