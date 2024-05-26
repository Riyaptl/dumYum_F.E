import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Faq from '../component/Faq'
import Navbar from '../component/Navbar'

const FAQPage = () => {
  return (
    <div className="">
      <Navbar />
      {/* <div className="sm:pt-28 pt-3"> */}
        <Faq />
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default FAQPage
