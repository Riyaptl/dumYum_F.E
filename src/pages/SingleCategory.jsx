import React from 'react'
import Navbar from '../component/Navbar'
import FooterBanner from '../component/FooterBanner'
import CategoryProduct from '../component/CategoryProduct'
import Footer from '../component/Footer'

const SingleCategory = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:pt-32 pt-3">
        <FooterBanner />
        <CategoryProduct />
        <Footer />
      </div>
    </div>
  )
}

export default SingleCategory
