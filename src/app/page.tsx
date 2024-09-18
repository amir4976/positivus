import Navbar from '@/components/modules/Navbar/Navbar'
import Landing from '@/components/templates/landing/Landing'
import MarqueeComponent from '@/components/templates/marquee/Marquee'
import React from 'react'

function page() {
  return (
    <div className='w-full h-fit flex justify-center'>
      <div className="container w-max-7xl ">
        <Navbar/>
        <Landing />
        <MarqueeComponent />
        
      </div>
    </div>
  )
}

export default page
