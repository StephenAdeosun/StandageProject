import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product1 from "../public/image 288.svg";
import Product2 from "../public/image 287.svg";

function projectFeatures() {
  return (
    <div id="features" className="max-w-[1400px] mt-[60px] md:mt-0 min-h-[1320px] flex justify-center ">
      <div className="max-w-[953px] mx-2 md:mx-0 min-h-[1320px]">
        <div className="">
          <h1 className="text-[36px] md:text-[48px] font-[700] text-[#E16E4E] ">
            Product Features
          </h1>
          <h3 className="font-[400]  text-[18px] text-[#202020]">
            Discover the Essence of Our Tea Collection
          </h3>
        </div>

        <div className="min-h-[440px] mt-[50px]   md:mt-[80px] gap-[24px] items-center flex flex-col md:flex-row  m-auto max-w-[953px]">
          <div className="">
            <Image
              src={Product1}
              width={467}
              height={440}
              alt="selectedProducts"
              className="h-full"
            />
          </div>
          <div className="max-w-[462px] min-h-[423px]">
            <h1 className="font-[600] text-[32px]  text-[#202020]">
            Honey that took over 2 years to find.
            </h1>
            <p className="font-[400]  leading-[26px] md:leading-[32px] w-full text-[18px] text-[#333333]">
              Discover the liquid gold that embodies patience and persistence –
              our honey took over 2 years to find. We have tried over a 1000
              different types of honey of different locations and finally, after
              2 years of extensive search and going all the way from Japan to
              Spain, we discovered the perfect honey for the perfect flavored
              blend of tea.
            </p>
            <Link href="/aboutBrand">
              <button className="min-w-[270px] mt-[32px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
          </div>
        </div>

        <div className="min-h-[440px]   mt-[80px] gap-[24px] items-center flex flex-col md:flex-row  m-auto max-w-[953px]">
        
          <div className="max-w-[462px] order-2 md:order-1 min-h-[423px]">
            <h1 className="font-[600] text-[32px]  text-[#202020]">
            Blended by Japanese tea sommelier Yoko Toda.
            </h1>
            <p className="font-[400] leading-[26px] md:leading-[32px] w-full text-[18px] text-[#333333]">
            Crafted with precision and expertise, each blend bears the mark of Japanese tea sommelier Yoko Toda. Immerse yourself in the artistry of tea, perfected by a master for an unparalleled experience in every sip.
            </p>
            <Link href="/aboutBrand">
              <button className="min-w-[270px] mt-[32px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={Product2}
              width={467}
              height={440}
              alt="selectedProducts"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectFeatures;
