import React from "react";
import Image from "next/image";
import Bg from "../public/image 286.svg";
import Link from "next/link";

function elevate() {
  return (
    <div className="relative max-w-[1400px] px-2 min-h-[640px] flex justify-center items-center">
      <Image
        src={Bg}
        alt="Background Image" 
        layout="fill"
        objectFit="cover"
      />

      <div className="max-w-[647px]  w-full min-h-[340px] z-10  text-white">
        <h1 className=" text-[32px] md:text-4xl font-semibold leading-tight">
          Indulge in the Extraordinary.
          <br />
          <span className="text-[#DBCA00]">Elevate Your Sip</span>, Elevate
          Your Life.
        </h1>
        <p className="text-lg mt-4">
          Ready to embark on a journey of unparalleled taste and tranquility?
          Choose Lakshimi Japanese Tea where every cup is a celebration of
          flavor, wellness, and pure indulgence.
        </p>
        <Link href="/aboutBrand">
              <button className="min-w-[270px] mt-[48px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
      </div>
    </div>
  );
}

export default elevate;
