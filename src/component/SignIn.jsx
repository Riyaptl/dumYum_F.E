import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BiShow, BiHide } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {signIn, forgotPass, sendOTP} from "../slices/authSlice"
import {addBucketCart} from "../slices/cartSlice"
import Cookies from 'js-cookie';
import { AiOutlineClose } from "react-icons/ai";

function SignIn(props) {
  const cart = Cookies.get('cart') && JSON.parse(Cookies.get('cart'))
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {authError} = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotPassData, setForgotPassData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setForgotPassData({
      ...forgotPassData,
      [name]: value
    });
  };

  const handleForgotPasswordClick = () => {
    setError("")
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setForgotPassData({
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: ""
    })
    setOtpSent(false)
  };

  useEffect(() => {
    // console.log('hit');
    setError(authError)
  }, [authError])

  const handleSendOTP = async () => {
    if (formData.email != ""){
      const res = await dispatch(sendOTP(forgotPassData.email))
      !res.error && setOtpSent(true)
    }else {
      setError("Enter email id")
    }
  }

  const handleResetPassword = () => {
    dispatch(forgotPass({...forgotPassData}))
    setShowOverlay(false);
    setForgotPassData({
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: ""
    })
    setOtpSent(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await dispatch(signIn({ ...formData }));
      if (!res.error && cart){
        console.log('cart', cart);
        res = await dispatch(addBucketCart(cart))
      }
      !res.error && navigate("/")
    } catch (error) {
      setError(error.message)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full mx-auto">
        <form onSubmit={handleSubmit} className=" bg-white  mt-5 px-8  pb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome!</h1>
          <p className="text-gray-600 text-center mb-8">Use credentials to access your account.</p>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6 relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div
              className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="#"
              onClick={handleForgotPasswordClick}
              className="text-black-800 hover:underline"
            >
              Forgot password
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="rounded hover:bg-black  hover:text-white border border-black text-black py-2 px-4   focus:outline-none transition duration-300 ease-in-out"
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enter Your Account
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-600">
              Don't have an account? Click on the{" "}
              <span className="text-black font-bold cursor-pointer" onClick={props.showSignupForm}>
                ( Sign Up )
              </span>{" "}
              button above
            </span>
          </div>
        </form>
       

        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-72 h-60 md:w-1/2 lg:w-2/6 lg:h-1/2 bg-white flex justify-center rounded shadow-lg relative">
              <div className="absolute top-4 right-4 text-lg text-black">
                <AiOutlineClose onClick={closeOverlay} />
              </div>
              <div className="w-64 md: xl:w-96 flex flex-col justify-center">
                {!otpSent ? 
                  <input
                  value={forgotPassData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="w-full border border-grey-300 mb-5 px-2 py-2"
                  placeholder="Enter Your Email"
                  required
                  />
                :
                <>
                  <input 
                    value={forgotPassData.otp}
                    onChange={handleChange}
                    type="number"
                    name="otp"
                    className="w-full border border-grey-300 mb-5 px-2 py-2"
                    placeholder="Enter OTP sent"
                    required
                  />
                  <div className="mb-6 relative">
                    <input 
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={forgotPassData.newPassword}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="Enter new password"
                      required
                    />
                    <div
                      className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                      >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </div>
                  </div>
                  <div className="mb-6 relative">
                    <input 
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={forgotPassData.confirmPassword}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm new password"
                      required
                    />
                    <div
                      className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                      >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </div>
                  </div>                
                </>
                }
                {!otpSent ? 
                  <button
                    onClick={handleSendOTP}
                    className=" text-black py-2 px-4 hover:bg-black border-black  border hover:text-white"
                  >
                    Send OTP
                  </button> 
                  :
                  <button
                    onClick={handleResetPassword}
                    className="border-black text-black hover:text-white py-2 px-4 hover:bg-black border"
                  >
                    Reset Password
                  </button> 
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
