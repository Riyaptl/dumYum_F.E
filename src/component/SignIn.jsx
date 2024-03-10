import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BiShow, BiHide } from "react-icons/bi";
import { useDispatch } from "react-redux";

function SignIn(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForgotPasswordClick = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ formData }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full mx-auto">
        <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded mt-5 px-8 pt-4 pb-8">
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
              className="text-red-800 hover:underline"
            >
              Forgot password
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enter Your Account
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-600">
              Don't have an account? Click on the{" "}
              <span className="text-blue-600 cursor-pointer" onClick={props.showSignupForm}>
                ( Sign Up )
              </span>{" "}
              button above
            </span>
          </div>
        </form>

        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-72 h-60 md:w-1/2 lg:w-2/6 lg:h-1/2 bg-white flex justify-center rounded shadow-lg relative">
              <div className="absolute top-4 right-4 text-lg text-red-600">
                <ImCross onClick={closeOverlay} />
              </div>
              <div className="w-64 md: xl:w-96 flex flex-col justify-center">
                <input
                  type="email"
                  className="w-full border border-grey-300 mb-5 px-2 py-2"
                  placeholder="Enter Your Email"
                />
                <button
                  onClick={closeOverlay}
                  className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
