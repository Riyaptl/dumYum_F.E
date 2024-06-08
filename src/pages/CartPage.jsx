import React, {useEffect}  from 'react'
import Cart from '../component/Cart'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux'
import CartOffline from '../component/CartOffline'
import Navbar from '../component/Navbar'
import { useLocation } from 'react-router-dom'

const CartPage = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  const loc = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [loc.pathname]); 

  return (
    <div>
      <Navbar />
      {isLoggedIn ? <Cart /> : <CartOffline/>}
      <Footer />
    </div>
  )
}

export default CartPage
