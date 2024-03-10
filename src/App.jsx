import { useState } from 'react'

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage'
import SingleCategory from './pages/SingleCategory'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/:id" element={<ProductPage/>}/>
          <Route exact path="/product/:id" element={<SingleProductPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
