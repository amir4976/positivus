import React from 'react'
interface TitleProps {
  title:string,
  subtitle:string
}
function Title({title,subtitle}:TitleProps) {
  return (
    <div className='w-full flex justify-start gap-6 h-fit mt-10 max-sm:flex-col max-sm:justify-center'>
    <div>
    <h1 className='text-4xl bg-greenDef p-3 font-sg_Bold max-sm:text-center' >{title}</h1>
    </div>
      <p className='w-[500px] max-sm:w-full'>{subtitle}</p>
    </div>
  )
}

export default Title
