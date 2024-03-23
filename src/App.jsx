import { useState } from 'react'

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage'
import SingleCategory from './pages/SingleCategory'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage';
import AuthForm from './pages/AuthForm';
import UserDetailsForm from './pages/UserDetailsForm';
import { useSelector } from 'react-redux';
import CartPage from './pages/CartPage';

function App() {
  const {isLoggedIn} = useSelector((state) => state.auth)

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/auth" element={<AuthForm/>}/> 
          {/* <Route exact path="/auth" element={isLoggedIn ? <HomePage/> : <AuthForm/>}/>  */}
          <Route exact path="/details" element={<UserDetailsForm/>}/> 
          <Route exact path="/" element={<HomePage/>}/> 
          <Route exact path="/cart" element={<CartPage/>}/> 
          <Route exact path="/:id" element={<ProductPage/>}/>
          <Route exact path="/product/:id" element={<SingleProductPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
