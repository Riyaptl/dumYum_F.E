import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import SingleProduct from '../component/singleProduct'

const SingleProductPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="sm:pt-32 pt-3">
        <SingleProduct />
        <Footer />
      </div>
    </div>
  )
}

export default SingleProductPage
