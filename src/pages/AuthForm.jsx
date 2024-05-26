import React, { useState } from 'react'
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'
import Navbar from '../component/Navbar'

function AuthForm() {
  const [showSignIn, setShowSignIn] = useState(true)
  const [showSignUp, setShowSignUp] = useState(false)

  const showSignInForm = () => {
    setShowSignIn(true)
    setShowSignUp(false)
  }

  const showSignupForm = () => {
    setShowSignIn(false)
    setShowSignUp(true)
  }

  return (
    <>
      <Navbar />
      <div
        className="w-full flex justify-center items-start min-h-screen "
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-11/12 lg:w-5/12 flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg mt-5">
          <div className="w-full  flex justify-around items-center mb-3">
            <button
              onClick={showSignInForm}
              className={`flex items-center justify-center  h-8 text-lg font-semibold  focus:outline-none ${
                showSignIn
                  ? 'border-b border-black transition duration-300 ease-in-out'
                  : 'text-gray-700'
              }`}
              style={{ background: 'none' }}
            >
              <FiLogIn className="mr-2" />
              Sign In
            </button>
            <button
              onClick={showSignupForm}
              className={`flex items-center justify-center  h-8 text-lg font-semibold focus:outline-none ${
                showSignUp
                  ? 'border-b border-black transition duration-300 ease-in-out'
                  : 'text-gray-700'
              }`}
              style={{ background: 'none' }}
            >
              <FiUserPlus className="mr-2" />
              Sign Up
            </button>
          </div>

          <div className="w-full flex justify-center items-start">
            <div className="w-full border">
              {showSignIn && <SignIn showSignupForm={showSignupForm} />}
              {showSignUp && <SignUp showSignInForm={showSignInForm} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthForm
