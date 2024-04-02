import React, { useEffect, useState } from 'react'
import { FaEdit, FaTruck } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, updateQuantity, removeProduct, updateAddressCart } from '../slices/cartSlice'
import { addAddress, updateAddress, getAddress } from '../slices/customerSlice'
import { ImCross } from "react-icons/im";
import { getLocationCart, whetherDeliver } from '../slices/locationSlice'

const Cart = () => {
  const [pincode, setPincode] = useState("")
  const [checkPincode, setCheckPincode] = useState("")
  const [showOverlay, setShowOverlay] = useState(false);
  const [saveAddress, setSaveAddress] = useState(false)
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    street: '',
    nearby: '',
    city: '',
    pincode: '',
    state: ''
  });
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state.cart)
  const {address} = useSelector(state => state.customer)
  const {location, error, deliverMessage} = useSelector(state => state.location)
  const productImages = `https://dumyum.onrender.com/uploads/subCategory/`

  useEffect(() => {
    dispatch(getCart())
    dispatch(getAddress())
  }, [])

  // useEffect(() => {
  //   setAddressDetails({...address})
  // }, [address])

  useEffect(() => {
    const addressCart = cart?.addressDetails
    if (addressCart){
      setPincode(addressCart.pincode)
      setAddressDetails({
        ...addressCart
      })
    }
  }, [cart])
    
  useEffect(() => {
    if (pincode){
      dispatch(getLocationCart({pincode}))
    }
  }, [pincode])

  const handleChange = (e) => {
    const {name, value} = e.target
    setAddressDetails({
      ...addressDetails,
      [name]: value
    })
  }


  const remove = async (subCategoryId) => {
    await dispatch(removeProduct({subCategoryId}))
  }

  const changeQuantity = async (subCategoryId, quantity) => {
    if (quantity > 0){
      await dispatch(updateQuantity({subCategoryId, quantity}))
    }
  };
  
  const checkShippingAvailability = async () => {
    if (checkPincode === ''){
      return
    }
    await dispatch(whetherDeliver({pincode: checkPincode}))
  }

  const selectAddress = async (selectedAddress) => {
    await dispatch(updateAddressCart(selectedAddress))
    setCheckPincode("")
  }

  const addNewAddress = () => {
    setShowOverlay(true);
    console.log('Edit address')

  }

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const handleSubmitAddress = async () => {
    await dispatch(addAddress({...addressDetails}))
    await dispatch(updateAddressCart({...addressDetails}))
    dispatch(getAddress())
    setCheckPincode("")
    setShowOverlay(false);
  };

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
    cart.addressDetails = {...addressDetails}
  }

  return (
    <div className="bg-gray-100 py-4">
      <div className="flex shadow-md my-10 mx-auto  w-4/5">
        <div className="w-3/4 bg-white px-10 py-10 ">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart?.predefinedOrder.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cart?.predefinedOrder.map((product) => (
            <div
            key={product.subCategoryId}
            className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={productImages+product.image}
                    alt={product.subCategory}
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{product.subCategory}</span>
                  <span className="text-red-500 text-xs">{product.category}</span>
                  <button
                    onClick={() => remove(product.subCategoryId)}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <button
                  onClick={() => changeQuantity(product.subCategoryId, product.quantity-1)}
                  className="fill-current text-gray-600 w-3"
                >
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={product.quantity}
                  // value={product.quantity}
                  readOnly
                />
                <button
                  onClick={() => changeQuantity(product.subCategoryId, product.quantity+1)}
                  className="fill-current text-gray-600 w-3"
                >
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${(+product.price).toFixed(0)}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${(product.quantity * +product.price).toFixed(0)}
              </span>
            </div>
          ))}
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              {cart?.finalPrice}
            </div>
          </div>
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

        <div id="summary" className="w-1/4 px-8 py-10 bg-white border-l">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {cart?.predefinedOrder.length}
            </span>
            <span className="font-semibold text-sm uppercase">
              Total Quantity {cart?.totalQuantity}
            </span>
            <span className="font-semibold text-sm">
              ${cart?.finalPrice.toFixed(0)}
            </span>
          </div>
          {location &&
          <>
            <div className="border-t mt-4 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-sm uppercase">
                    Shipping Charge
                  </span>
                  <span className="font-semibold text-sm">
                    ${(+location?.ecd).toFixed(0)}
                  </span>
                </div>
                {location.priceLimit && +location.priceLimit < +cart?.finalPrice &&
                  <div className="flex justify-between">
                    <span className="font-semibold text-sm uppercase">
                      Shipping Charge Discount
                    </span>
                    <span className="font-semibold text-sm">
                      -${(+location?.ecd).toFixed(0)}
                    </span>
                  </div>
                }
              {/* <div className="flex justify-between mt-2">
                <span className="font-semibold text-sm uppercase">
                Tax ({taxPercentage}%)
                </span>
                <span className="font-semibold text-sm">
                  ${(totalProductPrice * (taxPercentage / 100)).toFixed(2)}
                  </span>
                </div> */}
              <div className="flex justify-between mt-2">
                <span className="font-semibold text-sm uppercase">
                  Total Cost
                </span>
                {location?.priceLimit && +location?.priceLimit < +cart?.finalPrice ?
                  <span className="font-semibold text-sm">
                    ${cart?.finalPrice.toFixed(0)}
                  </span>
                  :
                  <span className="font-semibold text-sm">
                    ${+(cart?.finalPrice.toFixed(0)) + +(+location?.ecd).toFixed(0)}
                  </span>

                }
                
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-sm uppercase">
                  Estimated Delivery in
                </span>
                <span className="font-semibold text-sm">
                  {Math.ceil(cart?.etp)} days
                </span>
              </div>

              {location?.priceLimit && 
                <div>
                  Shop above ${location.priceLimit} to get free shipping
                </div>
              }
            </div>
          </>
          }

          <div className="mt-6 flex items-center">
            <FaTruck className="mr-2" />
            <h2 className="font-semibold text-lg">
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


            <div className="mt-6 flex justify-between">
              <span className='flex items-center'>
              <FaTruck className="mr-2" />
              <h2 className="font-semibold text-lg">Shipping Address</h2></span>
              {/* <button onClick={addNewAddress} className="ml-2 ">
                <FaEdit />
              </button> */}
            </div>
            {address?.map((add, index) => (
              <div className="mt-6 flex justify-between">
                <input type="checkbox" onChange={() => selectAddress(add)} checked={add.pincode === addressDetails.pincode}/>
                <div className="mt-6" key={index}>
                  <p>{add.houseNumber}, {add.street}, {add.nearby}, {address.city}, {add.state}, {add.pincode}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 flex justify-between">
              <span className='flex items-center'>
              <FaTruck className="mr-2" />
              <h2 className="font-semibold text-lg">Add Address</h2></span>
              <button onClick={addNewAddress} className="ml-2 ">
                <FaEdit />
              </button>
            </div>

            {showOverlay && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-72 h-60 md:w-1/2 lg:w-2/6 lg:h-1/2 bg-white flex justify-center rounded shadow-lg relative">
                <div className="absolute top-4 right-4 text-lg text-red-600">
                  <ImCross onClick={closeOverlay} />
                </div>
                <div className="w-64 md: xl:w-96 flex flex-col justify-center">
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
                  {/* <div> 
                    <input type="checkbox" onChange={handleSaveAddress}/> Save for future orders
                  </div> */}
                  <button
                      onClick={handleSubmitAddress}
                      className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
                    >
                      Submit
                  </button>     
                </div>
              </div>
            </div>
          )}
          <p className="mt-2 text-green-600">{error}</p>
          <p className="mt-2 text-green-600">{deliverMessage}</p>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full mt-6">
            Checkout
          </button>
        </div>
      </div>
    </div>

  )
}

export default Cart
{/* {cart?.addressDetails.houseNumber && 
                <p>houseNumber - {addressDetails.houseNumber} </p>
              }
              {cart?.addressDetails.street && 
                <p>street - {addressDetails.street} </p>
              }
              {cart?.addressDetails.nearby && 
                <p>nearby - {addressDetails.nearby} </p>
              }
              {cart?.addressDetails.city && 
                <p>city - {addressDetails.city} </p>
              }
              {cart?.addressDetails.state && 
                <p>state - {addressDetails.state} </p>
              }
              {cart?.addressDetails.pincode && 
                <p>pincode - {addressDetails.pincode} </p>
              } */}