import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const EditCustOverlay = ({ customer, handleCloseEditForm, handleSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone || '',
    gender: customer.gender || '',
    birthdate: customer.birthdate || '',
    maritalStatus: customer.maritalStatus || '',
    kidsStatus: customer.kidsStatus || '',
    anniversary: customer.anniversary || '',
    kidsBirthdate: customer.kidsBirthdate || '',
    totalAmount: customer.totalAmount || '',
    totalNumber: customer.totalNumber || '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[80%] bg-white rounded shadow-lg p-4">
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={handleCloseEditForm}
          />
        </div>
        <h2 className="text-xl font-bold mb-4">Edit Details</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          {/* <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Birthdate
            </label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Marital Status
            </label>
            <div>
              <input
                type="radio"
                id="married"
                name="maritalStatus"
                value="married"
                checked={formData.maritalStatus === 'married'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="married" className="ml-2 mr-4">
                Married
              </label>
              <input
                type="radio"
                id="unmarried"
                name="maritalStatus"
                value="unmarried"
                checked={formData.maritalStatus === 'unmarried'}
                onChange={handleChange}
                className="form-radio"
              />
              <label htmlFor="unmarried" className="ml-2">
                Unmarried
              </label>
            </div>
          </div>
          {/* Anniversary */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Anniversary
            </label>
            <input
              type="date"
              name="anniversary"
              value={formData.anniversary}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          {/* Has Kids */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Has Kids</label>
            <input
              type="checkbox"
              name="kidsStatus"
              checked={formData.kidsStatus}
              onChange={handleChange}
              className="form-checkbox"
            />
          </div>
          {/* Kids Birthdate */}
          {formData.kidsStatus && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Kids Birthdate
              </label>
              <input
                type="date"
                name="kidsBirthdate"
                value={formData.kidsBirthdate}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
          )}
          {/* Total Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Total Amount
            </label>
            <input
              type="text"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          {/* Total Number */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Total Number
            </label>
            <input
              type="text"
              name="totalNumber"
              value={formData.totalNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCustOverlay
