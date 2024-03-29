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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermConditionsPage from './pages/TermConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  const {isLoggedIn} = useSelector((state) => state.auth)

  return (
    <div>
      <Router>
          <ToastContainer />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/> 
          <Route exact path="/auth" element={<AuthForm/>}/> 
          <Route exact path="/details" element={<UserDetailsForm/>}/> 
          <Route exact path="/:id" element={<ProductPage/>}/>
          <Route exact path="/product/:id" element={<SingleProductPage/>}/>
          <Route exact path="/cart" element={<CartPage/>}/> 
          <Route exact path="/policy" element={<PrivacyPolicyPage />}/> 
          <Route exact path="/t&c" element={<TermConditionsPage />}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
