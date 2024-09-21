import React from 'react'

function Button({text}:{text:string}) {
  return (
    <button className='mt-7 text-start text-lg text-white font-sg_regular bg-DarkDef p-3 rounded-lg'>
        {text}
    </button>
  )
}

export default Button
