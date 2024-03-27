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
import TermConditionsPage from './pages/TermConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProfilePage from './pages/ProfilePage';



function App() {
  const {isLoggedIn} = useSelector((state) => state.auth)

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/auth" element={<AuthForm/>}/> 
          {/* <Route exact path="/auth" element={isLoggedIn ? <HomePage/> : <AuthForm/>}/>  */}
          <Route exact path="/details" element={<UserDetailsForm/>}/> 
          {/* <Route exact path="/" element={<HomePage/>}/>  */}
          <Route exact path="/" element={<ProfilePage />}/> 
          <Route exact path="/:id" element={<ProductPage/>}/>
          <Route exact path="/product/:id" element={<SingleProductPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
