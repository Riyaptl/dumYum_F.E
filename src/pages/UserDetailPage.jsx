import React from 'react'
import UserDetailsForm from '../component/UserDetailsForm'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const UserDetailPage = () => {
  return (
    <div className="">
    <Navbar />
    {/* <div className="sm:pt-20 pt-10"> */}
      <UserDetailsForm />
      <Footer />
    {/* </div> */}
  </div>
  )
}

export default UserDetailPage
