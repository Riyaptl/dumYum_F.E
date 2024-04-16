import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateAddress,
  addAddress,
  removeAddress,
  defaultAddress,
  getAddress,
  getCustomer,
} from '../slices/customerSlice'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

const MyAddress = () => {
  const dispatch = useDispatch()
  const { address, customer } = useSelector((state) => state.customer)
  const [showOverlay, setShowOverlay] = useState(false)
  const [editingAddress, setEditingAddress] = useState(false)
  const [custDefaultAddress, setCustDefaultAddress] = useState('')
  const [addressToEdit, setAddressToEdit] = useState({})
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    street: '',
    nearby: '',
    city: '',
    pincode: '',
    state: '',
  })
  const closeOverlay = () => {
    setShowOverlay(false)
    setAddressDetails({
      houseNumber: '',
      street: '',
      nearby: '',
      city: '',
      pincode: '',
      state: '',
    })
  }

  useEffect(() => {
    dispatch(getAddress())
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddressDetails({
      ...addressDetails,
      [name]: value,
    })
  }

  useEffect(() => {
    setCustDefaultAddress(customer?.defaultAddress.toString())
  }, [customer?.defaultAddress])

  const handleSubmitAddress = async () => {
    if (editingAddress) {
      await dispatch(
        updateAddress({ data: { ...addressDetails }, id: addressToEdit._id }),
      )
    } else {
      await dispatch(addAddress({ ...addressDetails }))
    }
    dispatch(getAddress())
    setShowOverlay(false)
    setEditingAddress('')
    setAddressDetails({
      houseNumber: '',
      street: '',
      nearby: '',
      city: '',
      pincode: '',
      state: '',
    })
  }

  const handleEditAddress = (editAddress) => {
    setAddressDetails({ ...editAddress })
    setEditingAddress(editAddress._id.toString())
    setShowOverlay(true)
  }

  const handleDeleteAddress = async (id) => {
    await dispatch(removeAddress(id))
    await dispatch(getAddress())
    await dispatch(getCustomer())
  }

  const handleSetDefaultAddress = async (id) => {
    await dispatch(defaultAddress(id))
    setCustDefaultAddress(id.toString())
  }

  const handleAddNewAddress = () => {
    setEditingAddress(false)
    setShowOverlay(true)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Address</h2>
      <div className="flex justify-between flex-wrap">
        {address?.map((addressItem) => (
          <div
            key={addressItem._id}
            className="address-box bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full max-w-md mb-4 relative"
          >
            <div className="address-info p-4">
              <p className="font-semibold mb-4">
                <span className="block">
                  {addressItem.houseNumber}, {addressItem.street}
                </span>
                <span className="block">{addressItem.nearby}</span>
                <span className="block">
                  {addressItem.city}, {addressItem.state}, {addressItem.pincode}
                </span>
              </p>
              {addressItem._id === custDefaultAddress ? (
                <span className="text-green-500 font-semibold">Default</span>
              ) : (
                <button
                  className="default-button rounded px-3 py-1 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none"
                  onClick={() => handleSetDefaultAddress(addressItem._id)}
                >
                  Set as Default
                </button>
              )}
            </div>
            <div className="address-actions absolute top-0 right-0 mt-2 mr-2 flex">
              <button
                className="edit-button bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
                onClick={() => handleEditAddress(addressItem)}
              >
                <AiOutlineEdit />
              </button>
              <button
                className="delete-button bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none ml-2"
                onClick={() => handleDeleteAddress(addressItem._id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="add-address-button bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleAddNewAddress}
      >
        Add New Address
      </button>

      {/* Address Overlay */}
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full sm:w-96 bg-white flex justify-center rounded shadow-lg relative">
            <div className="absolute top-4 right-4 text-lg text-red-600">
              <ImCross onClick={closeOverlay} />
            </div>
            <div className="w-64 md:w-96 flex flex-col justify-center p-4">
              <input
                value={addressDetails.houseNumber}
                onChange={handleChange}
                type="text"
                name="houseNumber"
                className="w-full border border-grey-300 mb-3 px-2 py-2 rounded"
                placeholder="Enter your house number"
                required
              />
              <input
                value={addressDetails.street}
                onChange={handleChange}
                type="text"
                name="street"
                className="w-full border border-grey-300 mb-3 px-2 py-2 rounded"
                placeholder="Enter your street"
                required
              />
              <input
                className="w-full border border-grey-300 mb-3 px-2 py-2 rounded"
                value={addressDetails.nearby}
                onChange={handleChange}
                type="text"
                name="nearby"
                placeholder="Enter your nearby"
                required
              />
              <input
                className="w-full border border-grey-300 mb-3 px-2 py-2 rounded"
                value={addressDetails.pincode}
                onChange={handleChange}
                type="text"
                name="pincode"
                placeholder="Enter your pincode"
                required
              />
              <input
                className="w-full border border-grey-300 mb-3 px-2 py-2 rounded"
                value={addressDetails.city}
                onChange={handleChange}
                type="text"
                name="city"
                placeholder="Enter your city"
                required
              />
              <input
                className="w-full border border-grey-300 mb-3 px-2 py-2 rounded"
                value={addressDetails.state}
                onChange={handleChange}
                type="text"
                name="state"
                placeholder="Enter your state"
                required
              />
              <button
                onClick={handleSubmitAddress}
                className="submit-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              >
                {editingAddress ? 'Update' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyAddress
