import React, { useState } from 'react';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

function AuthForm() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const showSignInForm = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const showSignupForm = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <div className="w-full flex justify-center bg-[#fdf4ff] min-h-screen">
      <div className="w-11/12 flex">
        <div
          className="w-7/12 hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
        ></div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center items-center">
          <div className="w-full h-16 flex justify-around items-center mb-8">
            <button
              onClick={showSignInForm}
              className={`flex items-center justify-center w-1/3 h-full py-2 text-lg font-semibold rounded-lg ${
                showSignIn
                  ? 'bg-purple-700 text-white'
                  : 'bg-white text-purple-700 hover:bg-purple-200'
              }`}
            >
              <FiLogIn className="mr-2" />
              Sign In
            </button>
            <button
              onClick={showSignupForm}
              className={`flex items-center justify-center w-1/3 h-full py-2 text-lg font-semibold rounded-lg ${
                showSignUp
                  ? 'bg-purple-700 text-white'
                  : 'bg-white text-purple-700 hover:bg-purple-200'
              }`}
            >
              <FiUserPlus className="mr-2" />
              Sign Up
            </button>
          </div>

          <div className="w-full">
            {showSignIn && <SignIn showSignupForm={showSignupForm} />}
            {showSignUp && <SignUp showSignInForm={showSignInForm} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
