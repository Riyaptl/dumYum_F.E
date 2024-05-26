import React from 'react'
import Footer from '../component/Footer'
import Profile from '../component/Profile'
import Header from '../component/Header'
import Navbar from '../component/Navbar'

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    {/* <div className='pt-20'> */}
      <Profile />
      <Footer />
    {/* </div> */}
  </div>
  )
}

export default ProfilePage





