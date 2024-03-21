import React from "react";
import Image from "next/image";
import Bg from "../public/image 286.svg";
import Link from "next/link";

function elevate() {
  return (
    <div className="relative max-w-[1400px] min-h-[640px] flex justify-center items-center">
      <Image
        src={Bg}
        alt="Background Image" 
        layout="fill"
        objectFit="cover"
      />

      <div className="max-w-[647px] w-full min-h-[340px] z-10  text-white">
        <h1 className="text-4xl font-semibold leading-tight">
          Indulge in the Extraordinary.
          <br />
          <span className="text-orange-400">Elevate Your Sip</span>, Elevate
          Your Life.
        </h1>
        <p className="text-lg mt-4">
          Ready to embark on a journey of unparalleled taste and tranquility?
          Choose Lakshimi Japanese Tea where every cup is a celebration of
          flavor, wellness, and pure indulgence.
        </p>
        <Link href="/aboutBrand">
          <button className="mt-8 px-8 py-3 bg-orange-400 text-white font-medium rounded-lg">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default elevate;
