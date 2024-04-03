import React from 'react'
import Products from '../component/Products'
import FooterBanner from '../component/FooterBanner'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import SingleProduct from '../component/singleProduct'
import ExploreSlider from '../component/ExploreSlider'
import SpecialSlider from '../component/SpecialSlider'

const SingleProductPage = () => {
  return (
    <div>
      <Navbar />
      <SingleProduct />
      <ExploreSlider />
      <SpecialSlider />
      <Footer />
    </div>
  )
}

export default SingleProductPage
