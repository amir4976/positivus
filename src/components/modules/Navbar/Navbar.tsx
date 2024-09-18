import Image from "next/image";
import React from "react";
interface NavbarProps {
    title:sting
}
function Navbar() {
  const Navitems:NavbarProps[] = [
    { title: "AboutUs" },
    { title: "Services" },
    { title: "use Cases" },
    { title: "Pricing" },
    { title: "Blog" },
  ];
  return (
    <>
    <div className="w-full flex justify-between my-10  max-lg:hidden">
      <div className="logo">
        <Image src={"/logofull.png"} alt="logo" width={219} height={56} />
      </div>
      <div className="list flex ">
        <ul className="w-full h-full flex justify-center gap-10 text-xl items-center">
          {Navitems.map((item:NavbarProps, index) => {
              return <li  key={index}>{item.title}</li>;
            })}
        </ul>
        <button className="w-56 border-black border rounded-lg ">

            Request a quote
        </button>
      </div>
    </div>

    <div className="lg:hidden w-full h-fit flex justify-between items-center px-5 my-5">
    <div className="logo">
        <Image src={"/minilogo.png"} alt="logo" width={50} height={50} />
      </div>

      <div className="icon">
        icon
      </div>
    </div>
    </>
  );
}

export default Navbar;
