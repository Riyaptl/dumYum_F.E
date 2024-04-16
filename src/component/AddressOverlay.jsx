import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addAddress, updateAddress } from '../slices/customerSlice'
import { ImCross } from 'react-icons/im'

const AddressOverlay = ({
  showOverlay,
  setShowOverlay,
  editingAddress,
  addressToEdit,
}) => {
  const dispatch = useDispatch()
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    street: '',
    nearby: '',
    city: '',
    pincode: '',
    state: '',
  })

  useEffect(() => {
    if (editingAddress) {
      setAddressDetails(addressToEdit)
    } else {
      setAddressDetails({
        houseNumber: '',
        street: '',
        nearby: '',
        city: '',
        pincode: '',
        state: '',
      })
    }
  }, [editingAddress, addressToEdit])

  const closeOverlay = () => {
    setShowOverlay(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddressDetails({
      ...addressDetails,
      [name]: value,
    })
  }

  const handleSubmitAddress = async () => {
    if (editingAddress) {
      await dispatch(updateAddress({ ...addressDetails }, addressToEdit._id))
    } else {
      await dispatch(addAddress({ ...addressDetails }))
    }
    setShowOverlay(false)
  }

  return (
    <>
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-72 h-60 md:w-1/2 lg:w-2/6 lg:h-1/2 bg-white flex justify-center rounded shadow-lg relative">
            <div className="absolute top-4 right-4 text-lg text-red-600">
              <ImCross onClick={closeOverlay} />
            </div>
            <div className="w-64 md:xl:w-96 flex flex-col justify-center">
              <input
                value={addressDetails.houseNumber}
                onChange={handleChange}
                type="text"
                name="houseNumber"
                className="w-full border border-grey-300 mb-5 px-2 py-2"
                placeholder="Enter your house number"
                required
              />
              <input
                value={addressDetails.street}
                onChange={handleChange}
                type="text"
                name="street"
                className="w-full border border-grey-300 mb-5 px-2 py-2"
                placeholder="Enter your street"
                required
              />
              <input
                className="w-full border border-grey-300 mb-5 px-2 py-2"
                value={addressDetails.nearby}
                onChange={handleChange}
                type="text"
                name="nearby"
                placeholder="Enter your nearby"
                required
              />
              <input
                className="w-full border border-grey-300 mb-5 px-2 py-2"
                value={addressDetails.pincode}
                onChange={handleChange}
                type="text"
                name="pincode"
                placeholder="Enter your pincode"
                required
              />
              <input
                className="w-full border border-grey-300 mb-5 px-2 py-2"
                value={addressDetails.city}
                onChange={handleChange}
                type="text"
                name="city"
                placeholder="Enter your city"
                required
              />
              <input
                className="w-full border border-grey-300 mb-5 px-2 py-2"
                value={addressDetails.state}
                onChange={handleChange}
                type="text"
                name="state"
                placeholder="Enter your state"
                required
              />
              <button
                onClick={handleSubmitAddress}
                className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
              >
                {editingAddress ? 'Update' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddressOverlay
