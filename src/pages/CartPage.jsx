import React, {useEffect}  from 'react'
import Cart from '../component/Cart'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux'
import CartOffline from '../component/CartOffline'
import Navbar from '../component/Navbar'
import { useLocation } from 'react-router-dom'
import ExploreSlider from '../component/ExploreSlider'
import ExploreFixed from '../component/ExploreFixed'
import SpecialSlider from '../component/SpecialSlider'
import SpecialFixed from '../component/specialFixed'

const CartPage = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  const loc = useLocation()
  const { categories } = useSelector((state) => state.category)
  const { specials } = useSelector((state) => state.special)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [loc.pathname]); 

  return (
    <div>
      <Navbar />
      {isLoggedIn ? <Cart /> : <CartOffline/>}
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

export default CartPage
