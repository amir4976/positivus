'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import TestimonialsCard from '@/components/modules/TestimonialsCard/TestimonialsCard';
function Testimonials() {
  return (
    <div className='w-full h-fit flex bg-DarkDef text-white rounded-3xl p-5 mt-10 '>
    <Swiper 
        className='w-full flex md:flex-col'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide  >
        <TestimonialsCard/>
      </SwiperSlide>
      <SwiperSlide >
        <TestimonialsCard/>
      </SwiperSlide>
      <SwiperSlide >
        <TestimonialsCard/>
      </SwiperSlide>
      <SwiperSlide >
        <TestimonialsCard/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Testimonials
