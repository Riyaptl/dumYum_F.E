import React from 'react'
import Footer from '../component/Footer'
import TermConditions from '../component/TermConditions'
import Header from '../component/Header'
import Navbar from '../component/Navbar'

const TermConditionsPage = () => {
  return (
    <div className="">
      <Navbar />
      {/* <div className="sm:pt-28 pt-3"> */}
        <TermConditions />
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default TermConditionsPage
