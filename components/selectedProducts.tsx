/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Product1 from "../public/image 285.svg";
import  Product2 from "../public/image 284.svg";
function selectedProducts() {
  return (
    <div className="min-h-[1200px] mt-[30px] bg-[#FFFAFF] md:mt-0 max-w-[1440px] flex justify-center">
      <div className="min-h-[858px] mx-3 md:mx-0  max-w-[955px] w-full ">
        <div className="text-center">
          <h1 className="font-[700] text-center text-[36px] md:text-[48px] text-[#E16E4E]">
            Selected Products
          </h1>
          <h3 className="font-[400] text-center text-[18px] text-[#202020]">
            Indulge in Our Exceptional Tea Collection.
          </h3>
        </div>

        <div className="mt-[64px] flex flex-col gap-[25px] items-center md:flex-row">
          <div className="min-h-[858px]  m-auto max-w-[465px]">
            <div className="">
              <Image
                src={Product1}
                width={465}
                height={440}
                alt="selectedProducts"
              />
            </div>
            <h1 className="font-[600] text-[32px] mt-[24px] text-[#202020]">
              Premium Honey Tea
            </h1>
            <p className="font-[400] min-h-[254px] leading-[26px] md:leading-[40px] w-full  text-[18px] text-[#333333]">
              As a product delivered by a tea sommelier from a tea specialty
              shop, we have maximized the flavor of the tea leaves. We blend
              powdered multi-floral honey from Spain into the tea. The sweetness
              of the honey is so strong that there is no need to use sugar. Just
              one sip brings a feeling of happiness, a rich flavor. It’s a
              delicious tea, whether hot or iced, straight or as a milk tea.
            </p>
            <Link href="/aboutBrand">
              <button className="min-w-[270px] mt-[40px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="min-h-[858px]   m-auto max-w-[465px]">
            <div className="">
              <Image
                src={Product2}
                width={465}
                height={440}
                alt="selectedProducts"
              />
            </div>
            <h1 className="font-[600] text-[32px] mt-[24px] text-[#202020]">
              Premium Honey Lemon Tea
            </h1>
            <p className="font-[400] min-h-[254px] leading-[26px] md:leading-[36px] w-full text-[18px] text-[#333333]">
            Indulge in the harmonious blend of nature's finest ingredients with Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care, this exquisite infusion combines the sweetness of pure honey, the zest of sun-kissed lemons, and the premium quality tea leaves to create a tea experience like no other. Elevate your tea ritual with Lakshimi Premium Honey Lemon Tea, where every sip is a celebration of taste and tranquility.


            </p>
            <Link href="/aboutBrand">
              <button className="min-w-[270px] mt-[40px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default selectedProducts;
