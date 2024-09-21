import Navbar from '@/components/modules/Navbar/Navbar'
import Landing from '@/components/templates/landing/Landing'
import MarqueeComponent from '@/components/templates/marquee/Marquee'
import React from 'react'
import Title from '@/components/modules/Title/Title'
import Services from '@/components/templates/Services/Services'
import Contact from '@/components/templates/contact/Contact'
import DrawerList from '@/components/templates/Drawer/DrawerList'
import Team from '@/components/templates/Team/Team'
import CaseStudies from '@/components/templates/CaseStudies/CaseStudies'
import Testimonials from '@/components/templates/Testimonials/Testimonials'
import ContactUs from '@/components/templates/contactUs/ContactUs'
import Footer from '@/components/modules/Footer/Footer'
function page() {
  return (
    <div className='w-full h-fit flex justify-center'>
      <div className="container w-max-7xl max-md:px-5 ">
        <Navbar/>
        <Landing />
        <MarqueeComponent />
        <Title title="Services" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <Services/>
        <Contact/>
        <Title title="Case Studies" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
          <CaseStudies/>
        <Title title="Services" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <DrawerList/>
        <Title title="Team" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <Team/>
        <Title title="Testomonial" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <Testimonials/>
        <Title title="Contact Us" subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  )
}

export default page
