import React from "react";
import Image from "next/image";
import Logo from "../public/image 279.svg";
import Twitter from "../public/Group.svg";
import Insta from "../public/mdi_instagram.svg";
import LinkedIn from "../public/mingcute_linkedin-line.svg";
import Facebook from "../public/jam_facebook-square.svg";

function footer() {
  return (
    <div className="max-w-[1440px] min-h-[200px] flex justify-center">
      <div className="max-w-[144px] m-auto min-h-[136px]">
        <div className="m-auto max-w-[64px]">
          <Image src={Logo} width={64} height={64} alt="logo" />
        </div>
        <div className="mt-[24px] m-auto">
            <h1 className="font-[500] text-[14px] text-center text-[#4D4D4D]">Follow Us</h1>
            <div className="flex mt-[4px] m-auto gap-[16px]" >
                <Image src={Twitter} width={24} height={24} alt="twitter" />
                <Image src={Insta} width={24} height={24} alt="instagram" />
                <Image src={LinkedIn} width={24} height={24} alt="linkedin" />
                <Image src={Facebook} width={24} height={24} alt="facebook" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
