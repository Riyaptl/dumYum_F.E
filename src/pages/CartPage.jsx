import React from 'react'
import Cart from '../component/Cart'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux'
import CartOffline from '../component/CartOffline'
import Navbar from '../component/Navbar'

const CartPage = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  return (
    <div>
      <Navbar />
      {/* <div className='sm:pt-18 pt-3'> */}
      {isLoggedIn ? <Cart /> : <CartOffline/>}
      <Footer />
      {/* </div> */}
    </div>
  )
}

export default CartPage
