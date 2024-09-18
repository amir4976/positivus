import React from "react";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io";
function TeamCard() {
  return (
    <div className="col-span-1 rounded-lg shadow-box flex flex-col p-5 border border-black">
      <div className="flex w-full">
      <div className=" ">
        <Image
          className="rounded-full "
          src={"/images (1).jfif"}
          width={100}
          height={100}
          alt="person"
        />
      </div>

      <div className="w-full">
        <div className="flex justify-end text-2xl w-full"> <IoLogoLinkedin /></div>

        <div className="flex flex-col px-3">
          <span className="font-sg_Bold text-xl">emly json</span>
          <span className="font-sg_reqular text-xl">position</span>
        </div>

      </div>
      
      </div>

      <div className="mt-5">
      <hr className="border-black"/>
      <p className="mt-2">3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
    
      </div>
    </div>
  );
}

export default TeamCard;
