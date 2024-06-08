import React from 'react'
import AboutUs from '../component/AboutUs'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const AboutUsPage = () => {
  return (
    <div className="">
    <Navbar />
    {/* <div className="sm:pt-28 pt-3"> */}
      <AboutUs />
      <Footer />
    {/* </div> */}
  </div>
  )
}

export default AboutUsPage
