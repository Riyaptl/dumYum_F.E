import React, { useEffect, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { resetPassword } from "../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

function ResetPassword() {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch()
    const {message} = useSelector((state) => state.auth)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
          ...formData,
          [name]: value
        });
      };
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPassword(formData))
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-64 md: xl:w-96 flex flex-col justify-center">
            <div className="mb-6 relative">
                    <input 
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.oldPassword}
                      onChange={handleChange}
                      type={showOldPassword ? "text" : "password"}
                      name="oldPassword"
                      placeholder="Enter your old password"
                      required
                    />
                    <div
                      className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
                      onClick={() => {setShowOldPassword(!showOldPassword)}}
                      >
                      {showOldPassword ? <BiHide /> : <BiShow />}
                    </div>
                    <input 
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.newPassword}
                      onChange={handleChange}
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="Enter your new password"
                      required
                    />
                    <div
                      className="absolute top-9 right-0 mt-3 mr-3 cursor-pointer"
                      onClick={() => {setShowNewPassword(!showNewPassword)}}
                      >
                      {showNewPassword ? <BiHide /> : <BiShow />}
                    </div>
                    <input 
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm your new password"
                      required
                    />
                    <div
                      className="absolute top-13 right-0 mt-3 mr-3 cursor-pointer"
                      onClick={() => {setShowConfirmPassword(!showConfirmPassword)}}
                      >
                      {showConfirmPassword ? <BiHide /> : <BiShow />}
                    </div>
                  </div>
              </div>
              <button type="submit">Submit</button>
        </form>        
    </>
  )
}

export default ResetPassword