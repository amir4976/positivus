'use client';
import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
interface NavbarProps {
  title: string;
}
function Navbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const Navitems: NavbarProps[] = [
    { title: "AboutUs" },
    { title: "Services" },
    { title: "use Cases" },
    { title: "Pricing" },
    { title: "Blog" },
  ];

  return (
    <>
      <div className="w-full flex justify-center relative">
        <div className="w-full max-w-[96rem] max-md:px-5 ">
          <div className="w-full flex justify-between mb-10  max-lg:hidden sticky top-2 z-50 bg-yellow-100 p-5 rounded-3xl">
            <div className="logo">
              <Image src={"/logofull.png"} alt="logo" width={219} height={56} />
            </div>
            <div className="list flex ">
              <ul className="w-full h-full flex justify-center gap-10 text-xl items-center">
                {Navitems.map((item: NavbarProps, index) => {
                  return <li key={index}>{item.title}</li>;
                })}
              </ul>
              <div className="ml-8">
                <Button text="Request a quote" />
              </div>
            </div>
          </div>

          <div className="lg:hidden w-full h-fit flex justify-between items-center px-5 my-5 sticky top-0 z-40 bg-white p-5">
            <div className="logo">
              <Image src={"/minilogo.png"} alt="logo" width={50} height={50} />
            </div>

            <div className="icon text-3xl" onClick={() => setIsNavOpen(!isNavOpen)}>
              <GiHamburgerMenu />
            </div>
          </div>
          <div className={`w-full h-screen border flex flex-col gap-5 fixed z-50 top-0 left-0 bg-greenDef intero lg:hidden ${isNavOpen?'fixed':'hidden'}`}>
            <div className="w-full flex text-3xl justify-end p-10" onClick={()=> setIsNavOpen(!isNavOpen)}>X</div>
            <div className="">
              <ul className="w-full h-full flex flex-col justify-center gap-10 text-3xl items-center ">
                {Navitems.map((item: NavbarProps, index) => {
                  return <li className={`${'intero-li'+ index}`} key={index}>{item.title}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
