import React, { useEffect, useRef, useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import { FaChild, FaUser, FaAddressCard, FaCalendarAlt, FaRing } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import {getSingleSubCategory} from "../slices/subCategorySlice"
import {addCart, getcartQuantity, checkDelivery} from "../slices/cartSlice"
import {getRating} from "../slices/ratingSlice"
import {addAddress} from "../slices/customerSlice"
import Cookies from 'js-cookie';

const SingleProduct = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  // const [showOverlay, setShowOverlay] = useState(false)
  const [cart, setCart] = useState(!isLoggedIn && Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [])
  const [quantity, setQuantity] = useState(1)
  const [quantInCart, setQuantInCart] = useState(0)
  const [status, setStatus] = useState('')
  // const [itemCount, setItemCount] = useState(0)
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    street: '',
    nearby: '',
    city: '',
    pincode: '',
    state: ''
  });
  const [err, setErr] = useState(null)
  const sliderRef = useRef(null)
  const dispatch = useDispatch()
  const location = useLocation()
  const {singleSubCategory} = useSelector((state) => state.subCategory)
  const [pincode, setPincode] = useState('')
  // const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')
  const id = location.pathname.split('/')[2]
  const {cartQuantity, error, deliveryStatus} = useSelector((state) => state.cart)
  const {rating} = useSelector((state) => state.rating)
  const pageImages = `http://localhost:8000/uploads/subCategory/`

  useEffect(() => {
    dispatch(getSingleSubCategory(id))
    dispatch(getRating(id))
    setStatus('')
    isLoggedIn && dispatch(getcartQuantity(id))
  }, [id])

  useEffect(() => {
    if (isLoggedIn){
      setQuantInCart(cartQuantity)
    }else{
      const item = cart[cart.findIndex(obj => obj.subCategoryId === id)]
      setQuantInCart(item ? item.quantity : 0)
    }
  }, [cartQuantity, id, cart])

  // useEffect(() => {
  //   setItemCount(cartQuantity)
  // }, [cartQuantity])

  useEffect(() => {
    setErr(err)
  }, [error])

  useEffect(() => {
    // console.log('cart', cart);
    Cookies.set('cart', JSON.stringify(cart))
  }, [cart])

  const handlePincodeChange = (e) => {
    setPincode(e.target.value)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setAddressDetails({
      ...addressDetails,
      [name]: value
    })
  }

  const handleAddToCart = async (subCategoryId) => {
    if (isLoggedIn){
      const res = await dispatch(addCart({subCategoryId, quantity}));
      // if (res.error?.message === "Address detail is required"){
      //   setShowOverlay(true)
      // }
    }else{
      const updatedCart = [...cart];
      console.log(updatedCart);
      const itemIndex = updatedCart.findIndex(obj => obj.subCategoryId === id);

      let total = quantity;
      if (itemIndex !== -1) {
        total += updatedCart[itemIndex].quantity;
        updatedCart.splice(itemIndex, 1); // Remove existing item
      }

      updatedCart.push({
        subCategoryId: id,
        quantity: total
      });

      setCart(updatedCart);

    }
  };

  const handleIncrement = async () => {
    setQuantity((prevQuantity) => prevQuantity+1)
  };

  const handleDecrement = async () => {
    if (quantity > 1){
      setQuantity((prevQuantity) => prevQuantity-1)
    }
  };

  // const handleSubmitAddress = async () => {
  //   if (isLoggedIn){
  //     const {pincode, state, city, ...address} = addressDetails
  //     await dispatch(addAddress({pincode, state, city, address:Object.values(address).join(", ")}))
  //     setAddressDetails({
  //       houseNumber: '',
  //       street: '',
  //       nearby: '',
  //       city: '',
  //       pincode: '',
  //       state: ''
  //     });      
  //   }
  //   setShowOverlay(false);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentImage(index)
    },
  }

  const handleImageClick = (index) => {
    setCurrentImage(index)
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleCheck = async (pincode) => {
    await dispatch(checkDelivery(pincode))
    setStatus(deliveryStatus)
  }
  // const closeOverlay = () => {
  //   setShowOverlay(false);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="w-full h-[400px] lg:mb-4">
              <img
                src={pageImages+singleSubCategory?.images[currentImage]}
                alt={singleSubCategory?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <Slider {...settings} ref={sliderRef} initialSlide={currentImage}>
              {singleSubCategory?.smallImages.map((image, index) => (
                <div key={index} onClick={() => handleImageClick(index)}>
                  <img src={pageImages+image} alt={singleSubCategory?.name} className="w-full" />
                </div>
              ))}
            </Slider>
            <div className="absolute top-1/3 transform -translate-y-1/2 flex justify-between w-full px-2">
              <button
                onClick={handlePrev}
                className="bg-white bg-opacity-50 rounded-full p-2 border border-black"
              >
                <TiArrowLeftThick />
              </button>
              <button
                onClick={handleNext}
                className="bg-white bg-opacity-50 rounded-full p-2 border border-black"
              >
                <TiArrowRightThick />
              </button>
            </div>
          </div>
          {rating?.rating}{Array.from({ length: rating?.rating }, (_, i) => (
            <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
            fillRule="evenodd"
            d="M10 3.578l1.124 3.459h3.617a.414.414 0 0 1 .268.732l-2.926 2.135 1.109 3.4a.414.414 0 0 1-.602.484L10 13.28l-2.99 2.268a.414.414 0 0 1-.602-.484l1.109-3.4-2.926-2.135a.414.414 0 0 1 .268-.732h3.617L10 3.578z"
            clipRule="evenodd"
            />
            </svg>
          ))}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="mb-6">
              <h1 className="text-3xl font-extralight mb-2">
                {singleSubCategory?.name}
              </h1>
              <p className="text-lg mb-1">{singleSubCategory?.finalPrice}</p>
              <p className="text-sm text-gray-500 mb-4">
                {singleSubCategory?.tagline}
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  className="border border-black bg-transparent bg-white duration-300 p-2 text-black mr-2"
                />
                <button onClick={() => handleCheck(pincode)} className="hover:border hover:border-black hover:text-black hover:bg-transparent bg-black duration-300 p-2 text-white">
                  Check
                </button>
                {status}
              </div>
                <div className="mt-2 border border-separate text-black ">
                  <button
                    className="px-4 py-2 "
                    onClick={() => handleDecrement(singleSubCategory?._id)}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    className="px-4 py-2 "
                    onClick={() => handleIncrement(singleSubCategory?._id)}
                  >
                    +
                  </button>
                </div> 
                <button
                  className="mt-2 px-4 py-2 border border-separate text-black  :border hover:border-black"
                  onClick={() => handleAddToCart(singleSubCategory?._id)}
                >
                  Add to Cart
                </button>
                <p>{quantInCart} items in cart</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex border-b pb-2">
            <button
              onClick={() => handleTabChange('description')}
              className={`mr-4 ${
                activeTab === 'description'
                  ? 'font-semibold border-b-2 border-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => handleTabChange('reviews')}
              className={`${
                activeTab === 'reviews'
                  ? 'font-semibold border-b-2 border-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Reviews
            </button>
          </div>
          {activeTab === 'description' && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Description:</h2>
              <p>{singleSubCategory?.description}</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Reviews:</h2>
              {rating?.review.map((rating, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 mb-4 shadow-md border border-gray-200"
                >
                  <div className="flex items-center mb-2">
                    <p className="text-lg font-semibold">{rating.customer}</p>
                    <div className="flex items-center ml-4">
                      {/* Display star ratings */}
                      {Array.from({ length: rating?.rating }, (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500 fill-current"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3.578l1.124 3.459h3.617a.414.414 0 0 1 .268.732l-2.926 2.135 1.109 3.4a.414.414 0 0 1-.602.484L10 13.28l-2.99 2.268a.414.414 0 0 1-.602-.484l1.109-3.4-2.926-2.135a.414.414 0 0 1 .268-.732h3.617L10 3.578z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">{rating.createdAt.toString().split('T')[0]}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{rating.title}</p>
                  <p className="text-gray-700">{rating.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
