import React from 'react'
import FooterBanner from '../component/FooterBanner'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Categories from '../component/Categories'
import Navbar from '../component/Navbar'

const CategoryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <div className='pt-20'> */}
        <Categories />
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default CategoryPage
