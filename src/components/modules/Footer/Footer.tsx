import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className="w-full h-fit flex flex-col bg-DarkDef rounded-t-[45px] p-5 mt-20  text-white md:p-14">
      <div className="footer-nav w-full flex justify-between items-center h-fit max-md:flex-col">
        <div>
          <Image src={"/v2.png"} width={100} height={100} alt="logo" />
        </div>

        <ul className="flex gap-5 max-md:flex-col max-md:mt-10">
          <li>AboutUs</li> <li>Services</li> <li>use Cases</li>
          <li> Pricing</li> <li>Blog</li>
        </ul>

        <ul className="flex gap-5 max-md:mt-10 text-2xl">
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <RxLinkedinLogo />
          </li>
          <li>
            <FaSquareXTwitter />
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-0 mt-5 md:grid-cols-3 md:gap-10 ">
        <div className="col-span-1 flex flex-col md:justify-between justify-center text-center md:text-start md:my-0 my-5">
          <span className="bg-greenDef text-center text-DarkDef p-2 rounded-sm ">Contact us:</span>
          <span>Email: info@positivus.com</span>
          <span>Phone: 555-567-8901</span>
          <span>
            Address: 1234 Main St Moonstone City, Stardust State 12345
          </span>
        </div>
        <div className="col-span-2 w-full h-fit p-5 md:p-14 bg-[#292A32] flex justify-center items-center rounded-2xl">
          <div className=" w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5 ">
            <div className="col-span-2">
              <input type="text" className="w-full p-5 rounded-lg border border-greenDef bg-transparent " placeholder="Email"/>
            </div>
            <div className="col-span-1 md:mt-0 mt-5">
              <button className="bg-greenDef text-black rounded-lg w-full h-full  p-5 "> 
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
