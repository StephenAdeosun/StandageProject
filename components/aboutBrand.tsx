import React from "react";
import Link from "next/link";
import Image from "next/image";
import About from "../public/image 297.svg";

function aboutBrand() {
  return (
    <div id="about" className=" min-h-[800px] max-w-[1440px] flex justify-center">
      <div className="  min-h-[557px] m-auto max-w-[1037px] gap-[39px] flex flex-col md:flex-row space-between">
        <div className="  min-h-[557px]  max-w-[499px]">
          <h1 className="font-[700] text-[64px] text-[#E16E4E]">About Brand</h1>
          <p className="font-[400] min-h-[377px] leading-[32px] text-[18px] text-[#333333]">
            Lakshimi started with a tea class that the representative, Yoko
            Toda, started at home. In 2005, “Lakshimi Tea Shop” opened in
            Kitano, Kobe. In 2008, we started to blend our own original tea.
            Initially, we started with only a few blends, but as we learned
            about the tastes and preferences of our customers, we gradually
            increased the number of original blends. In 2011, we developed our
            popular product, “Premium Honey Tea”. This tea was well-received by
            customers who enjoyed its sweet yet low-calorie content, making it a
            mainstay in our store.
          </p>
          <Link href="/aboutBrand">
            <button className="min-w-[270px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
              Buy Now
            </button>
          </Link>
        </div>

        <div>
          <Image src={About} width={460} height={449} alt="aboutBrand" />
        </div>
      </div>
    </div>
  );
}

export default aboutBrand;
