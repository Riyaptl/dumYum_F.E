import React from 'react'
import UserDetailsForm from '../component/UserDetailsForm'
import Header from '../component/Header'
import Footer from '../component/Footer'

const UserDetailPage = () => {
  return (
    <div className="">
    <Header />
    <div className="sm:pt-20 pt-10">
      <UserDetailsForm />
      <Footer />
    </div>
  </div>
  )
}

export default UserDetailPage
