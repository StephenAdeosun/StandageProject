import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product1 from "../public/image 303.svg";
import Product2 from "../public/image 302.svg";

function projectFeatures() {
  return (
    <div id="award" className="max-w-[1400px] min-h-[1320px] flex justify-center ">
      <div className="max-w-[953px] min-h-[1320px]">
        <div className="">
          <h1 className="text-[48px] font-[700] text-[#E16E4E] ">
            Awards & Recognition
          </h1>
          <h3 className="font-[400]  text-[18px] text-[#202020]">
            Our work speaks for us.
          </h3>
        </div>

        <div className="min-h-[467px]   mt-[48px] gap-[24px] items-center flex flex-col md:flex-row  m-auto max-w-[956px]">
          <div>
            <div>
              <Image
                src={Product1}
                width={467}
                height={440}
                alt="selectedProducts"
                className="h-full"
              />
            </div>
            <h1 className="font-[600] mt-[8px] text-[20px] leading-[32px] text-center  text-[#202020]">
              Top sales in tea category in Japanese EC site.
            </h1>
            <Link href="/aboutBrand">
              <button className="min-w-[270px] m-auto flex justify-center mt-[32px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
          </div>
        
          <div>
            <div>
              <Image
                src={Product2}
                width={467}
                height={440}
                alt="selectedProducts"
                className="h-full"
              />
            </div>
            <h1 className="font-[600] mt-[8px] text-[20px] leading-[32px] text-center  text-[#202020]">
            Top sales in tea category in department stores.
            </h1>
            <Link href="/aboutBrand">
              <button className="min-w-[270px] m-auto flex justify-center mt-[32px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  );
}

export default projectFeatures;
