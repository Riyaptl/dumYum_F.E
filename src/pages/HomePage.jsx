import React from 'react'
import Navbar from '../component/Navbar'
import BannerSlider from '../component/BannerSlider'
import SpecialSlider from '../component/SpecialSlider'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import TestSlider from '../component/TestSlider'
import VideoSection from '../component/VideoSection'

const HomePage = () => {
  return (
    <div className=' h-screen'>
     <Navbar />
      <BannerSlider  />
      <SpecialSlider />
      <VideoSection />
      <TestSlider />
      <Testimonial />
      <Footer /> 
    </div>
  )
}

export default HomePage
