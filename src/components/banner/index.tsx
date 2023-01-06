import React from 'react';
import Image from "next/image";
import BannerPic from "public/images/banner.jpg";

function Banner(): JSX.Element {
  return (
    <div className="relative z-1 h-[300px] sm:h-[400px] lg:h-[500px] xl-[600px] 2xl:h-[700px]">
        <Image src={BannerPic} alt="Banner" fill={true} />
        <div className="absolute top-1/2 w-full text-center ">
            <p className="text-sm sm:text-lg text-white font-semibold">Looking for adventure?</p>
            <button className="text-white text-sm border border-2 border-white bg-black px-6 py-2 rounded-lg mt-5  hover:scale-105 transition transform duration-300 ease-out">
                We can help
            </button>
        </div>
    </div>
  );
}

export default Banner;