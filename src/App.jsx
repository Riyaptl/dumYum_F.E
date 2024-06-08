import { useState, useEffect } from 'react'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import SingleCategory from './pages/SingleCategory'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleProductPage from './pages/SingleProductPage'
import AuthForm from './pages/AuthForm'
import { useSelector } from 'react-redux'
import CartPage from './pages/CartPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TermConditionsPage from './pages/TermConditionsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ProfilePage from './pages/ProfilePage'
import B2BConnectPage from './pages/B2BConnectPage'
import UserDetailPage from './pages/UserDetailPage'
import FaqPage from './pages/FaqPage'
import AboutUsPage from './pages/AboutUsPage'
import CategoryPage from './pages/CategoryPage'
import Announcement from './component/Announcement'
import RefundPolicyPage from './pages/RefundPolicyPage'
import ShippingPolicyPage from './pages/ShippingPolicyPage'


function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Router>
        <ToastContainer />
        <div className={`transition-all duration-500 ${isScrolled ? '-top-12' : 'top-0'}`}>
          <Announcement/>
        </div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/auth" element={<AuthForm />} />
          <Route exact path="/details" element={<UserDetailPage />} />
          <Route exact path="/:id" element={<ProductPage />} />
          <Route exact path="/categories" element={<CategoryPage />} />
          <Route exact path="/product/:id" element={<SingleProductPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/policy" element={<PrivacyPolicyPage />} />
          <Route exact path="/t&c" element={<TermConditionsPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/b2b" element={<B2BConnectPage />} />
          <Route exact path="/faq" element={<FaqPage/>} />
          <Route exact path="/about" element={<AboutUsPage />} />
          <Route exact path="/refund-policy" element={<RefundPolicyPage />} />
          <Route exact path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route exact path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
