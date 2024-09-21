'use client'

import Button from "@/components/modules/button/Button";
import Input from "@/components/modules/Input/Input";
import Image from "next/image";
import React, { useState } from "react";

function ContactUs() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [message,setMessage] = useState()

  const setData = ()=>{
    console.log(name,email,message)
  }
    return (
    <div className="contact-us-form w-full min-h-[720px] grid grid-cols-1 md:grid-cols-3 p-10 md:p-16 bg-whiteDef rounded-3xl relative overflow-hidden">
      <div className="col-span-2">
        <div className="flex gap-5">
          <div className="flex gap-3">
            <input type="radio" id="radio1" name="age" value="30" />
            <label htmlFor={"radio1"}>Say Hi</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" id="radio2" name="age" value="30" />
            <label htmlFor={"radio2"}>Get a Quote</label>
          </div>
        </div>

        <div className="form mt-10">
            <Input label="Name" placeholder="name" type="text" setValue={setName}/>
            <Input label="Email" placeholder="email" type="email" setValue={setEmail}/>
            <Input label="Message" placeholder="Message" type="textarea" setValue={setMessage}/>
            <button onClick={setData} className="mt-7 text-center text-lg text-white  font-sg_regular bg-DarkDef w-full p-3 rounded-lg">send</button>
        </div>
      </div>
      <div className="col-span-1 hidden md:flex">
        <Image className=" absolute top-24 -right-56" alt="cover" src={'/Illustration (7).png'} width={500} height={500}/>
      </div>
    </div>
  );
}

export default ContactUs;
