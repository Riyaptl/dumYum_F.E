import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiShow, BiHide } from 'react-icons/bi'
import { checkEmail, setUserData } from '../slices/authSlice'
import { useDispatch } from 'react-redux'

function SignUp(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfPassword, setShowConfPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (
    //   formData.first_name.trim() === '' ||
    //   formData.last_name.trim() === '' ||
    //   formData.email.trim() === '' ||
    //   formData.password.trim() === '' ||
    //   formData.password_confirmation.trim() === ''
    // ) {
    //   alert('All fields are required');
    //   return;
    // }

    await dispatch(
      setUserData({
        name: `${formData.first_name} ${formData.last_name}`,
        email: formData.email,
        password: formData.password,
      }),
    )
    const res = await dispatch(checkEmail({ email: formData.email }))

    if (!res.error) {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
      })
      navigate('/details')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const toggleConfPasswordVisibility = () => {
    setShowConfPassword(!showConfPassword)
  }

  return (
    <div className="w-full flex justify-center;">
      <div className="p-3 w-full bg-white md:mt-5 md:px-8  md:pb-8">
        <div className="text-center pb-8 ">
          <div className="text-3xl font-bold pb-4">Register</div>
          <p className="text-gray-600 text-center mb-2">
            Setup a new account in a minute.
          </p>
        </div>

        <div className="w-full h-56 flex flex-col justify-between">
          <div className=" w-full">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" w-full">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
          <div className="w-full relative">
            <input
              type={showConfPassword ? 'text' : 'password'}
              name="password_confirmation"
              placeholder="Repeat Password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={toggleConfPasswordVisibility}
            >
              {showConfPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <button
            onClick={handleSubmit}
            className="text-md font-semibold w-full border rounded hover:bg-black  hover:text-white  border-black text-black  pt-3 pb-3 focus:outline-none transition duration-300 ease-in-out"
          >
            {/* CREATE NEW ACCOUNT */}
            NEXT
          </button>
        </div>

        <div className="w-full flex justify-center text-center">
          <div className=" text-lg font-medium text-gray-500">
            Already have an account?{' '}
            <p className="text-black font-bold hover:underline transition duration-300 ease-in-out">
              <Link onClick={props.showSignInForm}> sign in </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
