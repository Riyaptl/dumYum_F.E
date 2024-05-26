import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import SingleProduct from '../component/singleProduct'
import ExploreSlider from '../component/ExploreSlider'
import SpecialSlider from '../component/SpecialSlider'
import Navbar from '../component/Navbar'
import { useSelector } from 'react-redux'
import ExploreFixed from '../component/ExploreFixed'
import SpecialFixed from '../component/specialFixed'

const SingleProductPage = () => {
  const { categories } = useSelector((state) => state.category)
  const { specials } = useSelector((state) => state.special)
  return (

    <div>
      <Navbar />
      <SingleProduct />
      {categories?.length > 3 
        ? 
          <ExploreSlider />
        :
          <ExploreFixed/>
        }
      {specials?.length > 3 
        ? 
          <SpecialSlider />
        :
          <SpecialFixed/>
        }
      <Footer />
    </div>
  )
}

export default SingleProductPage
