import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Image from "next/image";
interface ServicesCardProps {
  color: string;
  title: string;
  textBg: string;
  cover: string;
  background: string;
}
function ServicesCard({
  color,
  title,
  textBg,
  cover,
  background,
}: ServicesCardProps) {
  return (
    <div
      className={`w-full h-[310px] flex  ${background} border border-black rounded-3xl shadow-box p-14 `}
    >
      <div className=" h-full flex flex-col justify-between w-1/2 max-lg:w-full">
        <div className={`font-sg_Bold text-2xl   max-lg:w-full`}>
          <span className={`${textBg} p-2 leading-10 rounded-md `}>{title}</span>
        </div>

        <div className="flex font-sg_Bold max-lg:justify-between ">
          <button className={`flex items-center text-2xl gap-3 ${color}`}>
            <span className="text-4xl hover:rotate-[360deg] transition-all">
              <BsArrowUpRightCircleFill />
            </span>
            <span className="max-md:hidden">Learn More</span>
          </button>

          <Image
            className="hidden max-lg:flex"
            src={cover}
            alt={"s"}
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="max-lg:hidden w-1/2 flex justify-center items-center">
        <Image src={cover} alt={"s"} width={200} height={200} />
      </div>
    </div>
  );
}

export default ServicesCard;
