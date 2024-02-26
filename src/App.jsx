import { useState } from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/chocolate" element={<h1>explore page</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
