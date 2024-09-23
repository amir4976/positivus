'use client'
import React from 'react'
import { useRef,useState } from 'react';
import {motion} from 'framer-motion';

function Button({text}:{text:string}) {
  const ref = useRef(null);
  const [position,setPosition] = useState({x:0,y:0})
  const handelMouse = (e)=>{
    const {clientX,clientY} = e;
    const {height,width,left,top} = ref.current.getBoundingClientRect();
    const Middlex = clientX - left - width/2;
    const Middley = clientY - top - height/2;
    setPosition({x:Middlex,y:Middley})
  }
  const reset =()=>{
    setPosition({x:0,y:0})
  }
  const {x,y}=position;


  return (
    <div className="w-fit h-fit">
    <motion.div
      style={{position:"relative"}}
      ref={ref}
      onMouseMove={handelMouse}
      onMouseLeave={reset}
      animate={{x,y}}
      transition={{type:"spring",stiffness:150,damping:15,mass:0.1}}
    >

    <button className=' text-nowrap text-start text-lg text-black border border-black font-sg_regular bg-transparent hover:bg-DarkDef hover:text-white p-3 rounded-lg'>
        {text}
    </button>
    </motion.div>
      </div>
  )
}

export default Button
