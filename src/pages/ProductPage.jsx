import React from 'react'
import Products from '../component/Products'
import FooterBanner from '../component/FooterBanner'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import SingleProductPage from './SingleProductPage'

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      {/* <FooterBanner  />
      <Products /> */}
      <SingleProductPage />
      <Footer />
    </div>
  )
}

export default ProductPage
