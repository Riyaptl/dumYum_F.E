import React from 'react'
import Products from '../component/Products'
import FooterBanner from '../component/FooterBanner'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import SingleProduct from '../component/singleProduct'

const SingleProductPage = () => {
  return (
    <div>
      <Navbar />
      <SingleProduct />
      <Footer />
    </div>
  )
}

export default SingleProductPage
