import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
function MarqueeComponent() {
  return (
    <div className="w-full h-fit mt-10">
      <Marquee  speed={50} gradient={false}>
        <div className="w-full grid grid-cols-6 gap-10 lg:gap-36 px-5  transition-all duration-300">
        <Image className="filter grayscale hover:filter-none" src={"/company-logo/Company logo.png"} alt="logo" width={120} height={100} />
        <Image className="filter grayscale hover:filter-none" src={"/company-logo/Company logo (1).png"} alt="logo" width={120} height={100} />
        <Image className="filter grayscale hover:filter-none" src={"/company-logo/Company logo (2).png"} alt="logo" width={120} height={100} />
        <Image className="filter grayscale hover:filter-none" src={"/company-logo/Company logo (3).png"} alt="logo" width={120} height={100} />
        <Image className="filter grayscale hover:filter-none" src={"/company-logo/Company logo (4).png"} alt="logo" width={120} height={100} />
        <Image className="filter grayscale hover:filter-none" src={"/company-logo/Company logo (5).png"} alt="logo" width={120} height={100} />
            </div>
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
