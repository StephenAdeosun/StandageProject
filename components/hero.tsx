import React from "react";
import Image from "next/image";
import Bg from "../public/image 296.svg";
import Link from "next/link";

function Hero() {
  return (
    <div id='home' className="relative max-w-[1400px] min-h-[720px] flex justify-center items-center">
      <Image src={Bg} alt="Background Image" layout="fill" objectFit="cover" />

      <div className="max-w-[858px] mx-2 md:mx-0 text-center w-full min-h-[340px] z-10   text-white">
        <h1 className="text-[26px] sm:text-[2xl] md:text-[72px] font-[400px] leading-12 md:leading-[88px]">
          The ultimate aroma and taste, for blissful{" "}
          <span className="text-[#DBCA00]">relaxation</span> .
        </h1>
        <p className="text-md md:text-[16px] font-[600] mt-4 max-[656px] m-auto">
          Elevate your tea experience and discover the perfect balance of
          tranquility and taste, sip by sip. Welcome to a journey where every
          cup is a celebration of serenity and indulgence.
        </p>
        <Link href="/aboutBrand">
              <button className="min-w-[270px] mt-[40px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Hero;
