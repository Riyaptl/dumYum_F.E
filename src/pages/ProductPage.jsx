import React from 'react'
import Products from '../component/Products'
import FooterBanner from '../component/FooterBanner'
import Footer from '../component/Footer'
import Header from '../component/Header'
import SingleProductPage from './SingleProductPage'

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className='pt-20'>
        <FooterBanner />
        <Products />
        <Footer />
      </div>
    </div>
  )
}

export default ProductPage
