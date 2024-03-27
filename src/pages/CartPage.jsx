import React from 'react'
import Cart from '../component/Cart'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux'
import CartOffline from '../component/CartOffline'

const CartPage = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  return (
    <div>
      <Navbar />
      {isLoggedIn ? <Cart /> : <CartOffline/>}
      <Footer />
    </div>
  )
}

export default CartPage
