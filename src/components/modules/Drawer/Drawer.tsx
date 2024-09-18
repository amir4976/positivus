'use client'
import React from 'react'
type Props = {
  num:string,
  title:string,
  text:string
}
function Drawer({num,title,text}:Props) {
  const [isShow, setIsShow] = React.useState(false)
  return (
    <div className={`w-full flex flex-col p-10 rounded-xl border border-black  shadow-box mt-10 ${isShow ? 'bg-greenDef ' : 'bg-whiteDef'} transition-all `}>
        
        <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <span className='font-sg_Bold text-7xl'>{num}</span>
              <span className='font-sg_reqular text-4xl px-3'>{title}</span>
            </div>
            <button className="rounded-full bg-white text-5xl w-12 h-12  border-black border flex justify-center items-center " onClick={()=>setIsShow(!isShow)}>
              +
            </button>
        </div>

        <div className={`w-full mt-5 ${isShow ? 'block ' : 'hidden'} transition-all `}>
              <hr  className={'border-black'}/>
              <p className='mt-5'>{text}</p>
        </div>

    </div>
  )
}

export default Drawer
