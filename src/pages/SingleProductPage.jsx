import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import SingleProduct from '../component/singleProduct'
import ExploreSlider from '../component/ExploreSlider'
import SpecialSlider from '../component/SpecialSlider'

const SingleProductPage = () => {
  return (

    <div>
      <Header />
      <SingleProduct />
      <ExploreSlider />
      <SpecialSlider />
      <Footer />
    </div>
  )
}

export default SingleProductPage
