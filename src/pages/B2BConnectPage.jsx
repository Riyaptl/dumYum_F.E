import React from 'react'
import B2BConnectForm from '../component/B2BConnectForm'
import Footer from '../component/Footer'
import Header from '../component/Header'

const B2BConnectPage = () => {
  return (
    <div>
      <Header />
      <div className="sm:pt-24 pt-3">
        <B2BConnectForm />
        <Footer />
      </div>
    </div>
  )
}

export default B2BConnectPage
