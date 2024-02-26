import React from 'react'
import Navbar from '../component/Navbar'
import BannerSlider from '../component/BannerSlider'
import SpecialSlider from '../component/SpecialSlider'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import VideoSection from '../component/VideoSection'
import ExploreSlider from '../component/ExploreSlider'
import { useSelector } from 'react-redux'

const HomePage = () => {
  return (
    <div className=' h-screen'>
        <Navbar />
        <BannerSlider  />
        <ExploreSlider />
        <VideoSection />
        <SpecialSlider />
        <Testimonial />
        <Footer /> 
      </div>
    )
}

export default HomePage
