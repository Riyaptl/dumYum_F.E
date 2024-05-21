import React, { useEffect, useState } from 'react'
import { FaEdit, FaTruck } from 'react-icons/fa'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCart,
  updateQuantity,
  removeProduct,
  updateAddressCart,
  addMessage,
} from '../slices/cartSlice'
import { addAddress, updateAddress, getAddress } from '../slices/customerSlice'
import { ImCross } from 'react-icons/im'
import { getLocationCart, whetherDeliver } from '../slices/locationSlice'

const Cart = () => {
  const [pincode, setPincode] = useState('')
  const [checkPincode, setCheckPincode] = useState('')
  const [showOverlay, setShowOverlay] = useState(false)
  const [saveAddress, setSaveAddress] = useState(false)
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    street: '',
    nearby: '',
    city: '',
    pincode: '',
    state: '',
  })
  const [termsChecked, setTermsChecked] = useState(false)
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  const { address } = useSelector((state) => state.customer)
  const { location, error, deliverMessage } = useSelector(
    (state) => state.location,
  )
  const productImages = `http://localhost:8000/uploads/subCategory/`
  const [note, setNote] = useState('')
  const [orderFor, setOrderFor] = useState('')

  useEffect(() => {
    dispatch(getCart())
    dispatch(getAddress())
  }, [])

  useEffect(() => {
    const addressCart = cart?.addressDetails
    if (addressCart) {
      setPincode(addressCart.pincode)
      setAddressDetails({
        ...addressCart,
      })
    }
    setOrderFor(cart?.orderFor)
    setNote(cart?.message)
  }, [cart])

  useEffect(() => {
    if (pincode) {
      dispatch(getLocationCart({ pincode }))
    }
  }, [pincode])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddressDetails({
      ...addressDetails,
      [name]: value,
    })
  }

  const remove = async (subCategoryId) => {
    await dispatch(removeProduct({ subCategoryId }))
  }

  const changeQuantity = async (subCategoryId, quantity) => {
    if (quantity > 0) {
      await dispatch(updateQuantity({ subCategoryId, quantity }))
    }
  }

  const checkShippingAvailability = async () => {
    if (checkPincode === '') {
      return
    }
    await dispatch(whetherDeliver({ pincode: checkPincode }))
  }

  const selectAddress = async (passedAddress) => {
    await dispatch(updateAddressCart(passedAddress))
    setCheckPincode('')
  }

  const addNewAddress = () => {
    setShowOverlay(true)
    console.log('Edit address')
  }

  const closeOverlay = () => {
    setShowOverlay(false)
  }
  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked)
  }

  const handleSubmitAddress = async () => {
    const res = await dispatch(addAddress({ ...addressDetails }))
    await dispatch(
      updateAddressCart({
        ...res.payload.address[res.payload.address.length - 1],
      }),
    )
    setCheckPincode('')
    setShowOverlay(false)
  }

  // const handleSaveAddress = async () => {
  //   if (addressDetails.pincode === pincode){
  //     await dispatch(updateAddress({...addressDetails}))
  //   }else{
  //     await dispatch(addAddress({...addressDetails}))
  //     setPincode(addressDetails.pincode)
  //   }
  //   await dispatch(getLocationCart({pincode: addressDetails.pincode}))
  // }

  const handleCheckout = () => {
    cart.addressDetails = { ...addressDetails }
  }

  const handleMessage = (e) => {
    setNote(e.target.value)
  }

  const handleSave = () => {
    dispatch(addMessage({ orderFor, message: note }))
  }

  return (
    <div className="bg-gray-100 py-4 relative">
      <div className="flex flex-col md:flex-row shadow-md my-10 mx-auto max-w-[95%]">
        <div className="md:w-4/5 bg-white px-10 py-10 ">
          <div className="flex justify-between border-b pb-4">
            <h1 className="font-semibold text-xl">Shopping Cart</h1>
            <h2 className="font-semibold text-xl">
              {cart?.predefinedOrder.length} Items
            </h2>
          </div>
          <div className="mt-10 mb-4 overflow-x-auto">
            <table className="w-full table-auto hidden md:table">
              <thead>
                <tr>
                  <th className="font-semibold text-gray-600 text-xs uppercase text-center">
                    Product
                  </th>
                  <th className="font-semibold text-gray-600 text-xs uppercase text-center">
                    Price
                  </th>
                  <th className="font-semibold text-gray-600 text-xs uppercase text-center">
                    Quantity
                  </th>

                  <th className="font-semibold text-gray-600 text-xs uppercase text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.predefinedOrder.map((product) => (
                  <tr
                    key={product.subCategoryId}
                    className="border-b border-t border-gray-200  "
                  >
                    <td className="flex items-center py-2">
                      <div className="w-40">
                        <img
                          className="h-40"
                          src={productImages + product.image}
                          alt={product.subCategory.split('|')[0]}
                        />
                      </div>
                      <div className="flex flex-col ml-4">
                        <span className="font-bold ">
                          {product.subCategory.split('|')[0]}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {product.category}
                        </span>
                      </div>
                    </td>
                    <td className="text-center font-semibold text-sm py-2">
                      Rs. {(+product.price).toFixed(0)}
                    </td>
                    <td className="text-center py-4">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            changeQuantity(
                              product.subCategoryId,
                              product.quantity - 1,
                            )
                          }
                          className="px-4 py-2 border border-separate text-black "
                        >
                          -
                        </button>
                        <span className="px-4 py-2 border">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            changeQuantity(
                              product.subCategoryId,
                              product.quantity + 1,
                            )
                          }
                          className="px-4 py-2 border border-separate text-black "
                        >
                          +
                        </button>
                      </div>{' '}
                      <button
                        onClick={() => remove(product.subCategoryId)}
                        className="text-gray-600 hover:text-black text-xs pt-2"
                      >
                        Remove
                      </button>
                    </td>

                    <td className="text-center font-semibold text-sm py-2">
                      Rs. {(product.quantity * +product.price).toFixed(0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden">
              {cart?.predefinedOrder.map((product) => (
                <div
                  key={product.subCategoryId}
                  className="border-b border-gray-200 py-2"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="h-full"
                      src={productImages + product.image}
                      alt={product.subCategory.split('|')[0]}
                    />
                    <div className="flex flex-col items-center">
                      <span className="font-bold">
                        {product.subCategory.split('|')[0]}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {product.category}
                      </span>
                      <span className="font-semibold text-sm">
                        Price: ${(+product.price).toFixed(0)}
                      </span>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            changeQuantity(
                              product.subCategoryId,
                              product.quantity - 1,
                            )
                          }
                          className="px-3 py-1 border border-separate text-black"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            changeQuantity(
                              product.subCategoryId,
                              product.quantity + 1,
                            )
                          }
                          className="px-3 py-1 border border-separate text-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-center font-semibold text-sm mt-2">
                        Total: ${(product.quantity * +product.price).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-between mt-10 mb-8">
            <span className="font-semibold text-sm uppercase">
              Items {cart?.predefinedOrder.length}
            </span>
            <span className="font-semibold text-sm uppercase">
              Total Quantity {cart?.totalQuantity}
            </span>
            <span className="font-semibold text-sm">
              Rs. {cart?.finalPrice.toFixed(0)}
            </span>
          </div> */}
          {location && (
            <div>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-sm uppercase">Cost</span>
                  <span className="font-semibold text-sm">
                    Rs. {cart?.finalPrice}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-sm uppercase">
                    Shipping Charge:
                  </span>
                  <span className="font-semibold text-sm">
                    Rs. {(+location?.ecd).toFixed(0)}
                  </span>
                </div>
                {location.priceLimit &&
                  +location.priceLimit < +cart?.finalPrice && (
                    <div className="flex justify-between">
                      <span className="font-semibold text-sm uppercase">
                        Shipping Charge Discount
                      </span>
                      <span className="font-semibold text-sm">
                        -Rs. {(+location?.ecd).toFixed(0)}
                      </span>
                    </div>
                  )}
                <div className="flex justify-between mt-2">
                  <span className="font-semibold text-sm uppercase">
                    Total Cost
                  </span>
                  {location?.priceLimit &&
                  +location?.priceLimit < +cart?.finalPrice ? (
                    <span className="font-semibold text-sm">
                      Rs. {cart?.finalPrice.toFixed(0)}
                    </span>
                  ) : (
                    <span className="font-semibold text-sm">
                      Rs.
                      {+cart?.finalPrice.toFixed(0) +
                        +(+location?.ecd).toFixed(0)}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-sm uppercase">
                    Estimated Delivery in
                  </span>
                  <span className="font-semibold text-sm">
                    {Math.ceil(cart?.etp)} days
                  </span>
                </div>

                {location?.priceLimit && (
                  <div>
                    Shop above Rs. {location.priceLimit} to get free shipping
                  </div>
                )}
              </div>
            </div>
          )}

          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="md:w-2/5 px-8 py-10 bg-white border-l">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            {cart?.finalPrice}
          </div>
          <div className="mt-6 flex items-center">
            <FaTruck className="mr-2" />
            <h2 className="font-medium text-md md:text-lg lg:text-xl">
              Check Shipping Availability
            </h2>
          </div>
          <div className="flex border p-2 mt-2">
            <input
              type="text"
              className="border-none focus:outline-none w-full"
              placeholder="Enter Pincode"
              value={checkPincode}
              onChange={(e) => setCheckPincode(e.target.value)}
            />
            <button
              onClick={checkShippingAvailability}
              className="ml-2 bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 px-4 text-sm text-white uppercase"
            >
              <AiOutlineCheck />
            </button>
          </div>
          <p className="mt-2 text-green-600">{deliverMessage}</p>

          <div className="mt-6">
            <label htmlFor="orderNote" className="font-semibold text-lg">
              Order Note
            </label>
            <textarea
              id="orderNote"
              name="orderNote"
              rows="3"
              className="block w-full  border-gray-300 mt-2 p-2 border focus:outline-none "
              placeholder={'Add any notes to your order...'}
              value={note}
              onChange={handleMessage}
            ></textarea>
            <div>
              <div class="flex items-center mb-4">
                <p class="font-semibold text-lg mr-4">Order For:</p>

                <label for="oneself" class="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    id="oneself"
                    name="person"
                    value="oneself"
                    class="mr-2"
                    checked={orderFor === 'oneself'}
                    onChange={() => setOrderFor('oneself')}
                  />
                  <span>Oneself</span>
                </label>

                <label for="other" class="inline-flex items-center">
                  <input
                    type="radio"
                    id="other"
                    name="person"
                    value="other"
                    class="mr-2"
                    checked={orderFor === 'other'}
                    onChange={() => setOrderFor('other')}
                  />
                  <span>Other</span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  class="ml-auto px-4 py-1 border border-separate text-black hover:border-black "
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <span className="flex items-center">
              <FaTruck className="mr-2" />
              <h2 className="font-semibold text-lg">Shipping Address</h2>
            </span>
            {/* <button onClick={addNewAddress} className="ml-2 ">
                <FaEdit />
              </button> */}
          </div>
          {address?.map((add, index) => (
            <div className="mt-6 flex justify-between ">
              <input
                type="checkbox"
                className="cursor-pointer"
                onChange={() => selectAddress(add)}
                checked={add._id === cart?.addressDetails._id}
              />
              <div className="mt-6" key={index}>
                <p>
                  {add.houseNumber}, {add.street}, {add.nearby}, {address.city},{' '}
                  {add.state}, {add.pincode}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between">
            <span className="flex items-center">
              <FaTruck className="mr-2" />
              <h2 className="font-semibold text-lg">Add Address</h2>
            </span>
            <button onClick={addNewAddress} className="ml-2 ">
              <FaEdit />
            </button>
          </div>

          {showOverlay && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
              <div className="w-full md:w-[50%] bg-white flex flex-col justify-center rounded-lg shadow-lg relative h-[95%] md:h-[65%] ">
                <div className="absolute top-4 right-4 text-lg text-black cursor-pointer">
                  <AiOutlineClose onClick={closeOverlay} />
                </div>
                {/* <div className=""> */}
                <div className="w-full md:w-72 lg:w-2/3 m-auto">
                  <div className="p-6">
                    <input
                      value={addressDetails.houseNumber}
                      onChange={handleChange}
                      type="text"
                      name="houseNumber"
                      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your house number"
                      required
                    />
                    <input
                      value={addressDetails.street}
                      onChange={handleChange}
                      type="text"
                      name="street"
                      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your street"
                      required
                    />
                    <input
                      value={addressDetails.nearby}
                      onChange={handleChange}
                      type="text"
                      name="nearby"
                      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your nearby"
                      required
                    />
                    <input
                      value={addressDetails.pincode}
                      onChange={handleChange}
                      type="text"
                      name="pincode"
                      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your pincode"
                      required
                    />
                    <input
                      value={addressDetails.city}
                      onChange={handleChange}
                      type="text"
                      name="city"
                      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your city"
                      required
                    />
                    <input
                      value={addressDetails.state}
                      onChange={handleChange}
                      type="text"
                      name="state"
                      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your state"
                      required
                    />

                    <button
                      onClick={handleSubmitAddress}
                      className="w-full hover:border hover:border-black hover:text-black hover:bg-transparent bg-black duration-300 p-2 text-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="mt-2 text-green-600">{error}</p>

          <div className="mt-6 flex">
            <input
              type="checkbox"
              id="termsCheckbox"
              name="termsCheckbox"
              checked={termsChecked}
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="termsCheckbox" className="font-semibold text-sm">
              I have read and agree to the Terms & Conditions, Shipping, and
              Returns Policy.
            </label>
          </div>
          <button className=" hover:border hover:border-black hover:text-black hover:bg-transparent bg-black duration-300 p-2 text-white py-3 text-sm  uppercase w-full mt-6">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
