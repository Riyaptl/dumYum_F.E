import React from 'react'
import Navbar from '../component/Navbar'
import BannerSlider from '../component/BannerSlider'
import SpecialSlider from '../component/SpecialSlider'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import VideoSection from '../component/VideoSection'
import ExploreSlider from '../component/ExploreSlider'
import { useSelector } from 'react-redux'
import Newsletter from '../component/Newsletter'
import Tagline from '../component/Tagline'

const HomePage = () => {
  return (
    <div className=' h-screen'>
        <Navbar />
        <BannerSlider  />
        <Tagline tagline="All parcels are dispatched with ice packs or dry ice to ensure maximum product freshness until delivery!" />
        <ExploreSlider />
        <VideoSection />
        <Tagline tagline="All parcels are dispatched with ice packs or dry ice to ensure maximum product freshness until delivery!" />
        <SpecialSlider />
        <Newsletter />
        <Footer /> 
      </div> 
  )
}

export default HomePage
