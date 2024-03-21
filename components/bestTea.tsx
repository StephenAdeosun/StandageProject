import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product1 from "../public/image 289.svg";
import Product2 from "../public/Mask group (2).svg";

function bestTea() {
  return (
    <div id="products" className="max-w-[1400px] min-h-[1320px] flex justify-center ">
      <div className="max-w-[953px] min-h-[1320px]">
        <div className="">
          <h1 className="text-[48px] text-center font-[700] text-[#E16E4E] ">
            Get the best from our Tea
          </h1>
          <h3 className="font-[400] text-center  text-[18px] text-[#202020]">
            Style to your own taste.
          </h3>
        </div>

        <div className="min-h-[440px]   mt-[80px] gap-[24px] items-center flex flex-col md:flex-row  m-auto max-w-[953px]">
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
              With Milk
            </h1>
            <p className="font-[400]  leading-[32px] w-full text-[18px] text-[#333333]">
              Savor the perfect union of tradition and comfort by enjoying our
              tea with milk. Elevate your tea-drinking experience as the rich,
              robust flavors intertwine with the creamy embrace of milk,
              creating a symphony of taste that lingers in every delightful sip.
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
              With ice
            </h1>
            <p className="font-[400]  leading-[32px] w-full text-[18px] text-[#333333]">
              Embrace the refreshing symphony of flavors as you take a cool
              journey through our teas enjoyed with ice. Immerse yourself in the
              invigorating fusion of iced tea, where each sip unfolds a
              delightful dance of chilled sophistication and exceptional taste.
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

export default bestTea;
