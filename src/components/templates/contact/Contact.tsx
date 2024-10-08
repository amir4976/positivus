import Button from "@/components/modules/button/Button";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="mt-16 w-full h-fit grid grid-cols-2 p-10 bg-[#F3F3F3] rounded-xl max-md:grid-cols-1 ">
      <div className="col-span-1">
        <span className="font-sg_Bold text-3xl">Let’s make things happen</span>
        <p className="mt-5">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <div className="mt-7">
        <Button text=" Get your free proposal"/>
        </div>

      </div>
      <div className="col-span-1 relative flex justify-center ">
            <div className=" absolute -top-16 max-md:relative max-sm:top-2">
            <Image src={'/Illustration (6).png'} width={300} height={300} alt="cover" />
            </div>
      </div>
    </div>
  );
}

export default Contact;
