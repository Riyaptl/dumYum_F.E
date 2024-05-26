import React from 'react'
import Header from '../component/Header'
import FooterBanner from '../component/FooterBanner'
import CategoryProduct from '../component/CategoryProduct'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const SingleCategory = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="sm:pt-32 pt-3"> */}
        <FooterBanner />
        <CategoryProduct />
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default SingleCategory
