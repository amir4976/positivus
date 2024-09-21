import React from 'react'

interface inputProps{
    label:string;
    type:string;
    placeholder:string;
    setValue:React.Dispatch<React.SetStateAction<string | undefined>>;
}
function Input({label,type,placeholder,setValue}:inputProps) {
  return (
    <div className='w-full flex flex-col mt-5'>
      <label htmlFor='input' className='text-lg font-sg_Bold'>
        {label}*
      </label>
      {
        type === "textarea" ?
        <textarea className='p-4 rounded-[14px] border border-black' rows={6} placeholder={placeholder} onChange={(e)=>setValue(e.target.value)}/>
        :
        <input className='p-4 rounded-[14px] border border-black' type={type} placeholder={placeholder} onChange={(e)=>setValue(e.target.value)} />
      }
    </div>
  )
}

export default Input
