import React, { useEffect, useRef, useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import {getSingleSubCategory} from "../slices/subCategorySlice"
import {addCart, getcartQuantity, checkDelivery} from "../slices/cartSlice"

const SingleProduct = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [itemCount, setItemCount] = useState(0)
  const [addressDetails, setAddressDetails] = useState({
    address: '',
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
  const pageImages = `http://localhost:8000/uploads/subCategory/`

  useEffect(() => {
    dispatch(getSingleSubCategory(id))
  }, [id])

  useEffect(() => {
    dispatch(getcartQuantity(id))
  }, [cartQuantity, id])

  useEffect(() => {
    setItemCount(cartQuantity)
  }, [cartQuantity])

  useEffect(() => {
    setErr(err)
    console.log('*****error*****',error);
    if (error === "Address detail is required"){
      setShowOverlay(true)
    }
  }, [error])

  const handlePincodeChange = (e) => {
    setPincode(e.target.value)
  }

  const handleAddToCart = async (subCategoryId) => {
    await dispatch(addCart({subCategoryId, quantity}));
  };

  const handleIncrement = async () => {
    setQuantity((prevQuantity) => prevQuantity+1)
  };

  const handleDecrement = async () => {
    if (quantity > 1){
      setQuantity((prevQuantity) => prevQuantity-1)
    }
  };

  // const hasProduct = (id) => {
  //   // console.log(cart);
  //   // console.log(cart?.cart.predefinedOrder);
  //   const subCat = cart?.cart.predefinedOrder.find((obj) => obj.subCategoryId == id)
  //   // const subCat = cartProducts.find((obj) => obj.subCategoryId == id)
  //   return subCat
  //   return
  // }

  const handleSubmitAddress = async () => {
    // await dispatch();
    setShowOverlay(false);
  };

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

  const handleCheck = (pincode) => {
    dispatch(checkDelivery(pincode))
  }

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
                {deliveryStatus}
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
                <p>{itemCount} items in cart</p>
            </div>
          </div>
        </div>
        {showOverlay && (
          <div>
            <form onSubmit={handleSubmitAddress}>
              <input
                type="text"
                placeholder="Address"
                value={addressDetails.address}
                onChange={(e) => setAddressDetails({ ...addressDetails, address: e.target.value })}
              />
              <input
                type="number"
                placeholder="Pincode"
                value={addressDetails.pincode}
                onChange={(e) => setAddressDetails({ ...addressDetails, pincode: e.target.value })}
              />
              <input
                type="text"
                placeholder="City"
                value={addressDetails.city}
                onChange={(e) => setAddressDetails({ ...addressDetails, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="State"
                value={addressDetails.state}
                onChange={(e) => setAddressDetails({ ...addressDetails, state: e.target.value })}
              />
              {/* Add more address fields here */}
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
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

        </div>
      </div>
    </div>
  )
}

export default SingleProduct

// {activeTab === 'reviews' && (
//   <div className="mt-4">
//     <h2 className="text-2xl font-semibold mb-2">Reviews:</h2>
//     {singleSubCategory.ratings.map((rating, index) => (
//       <div
//         key={index}
//         className="bg-white rounded-lg p-4 mb-4 shadow-md border border-gray-200"
//       >
//         <div className="flex items-center mb-2">
//           <p className="text-lg font-semibold">{rating.user}</p>
//           <div className="flex items-center ml-4">
//             {/* Display star ratings */}
//             {Array.from({ length: rating.rating }, (_, i) => (
//               <svg
//                 key={i}
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-yellow-500 fill-current"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 3.578l1.124 3.459h3.617a.414.414 0 0 1 .268.732l-2.926 2.135 1.109 3.4a.414.414 0 0 1-.602.484L10 13.28l-2.99 2.268a.414.414 0 0 1-.602-.484l1.109-3.4-2.926-2.135a.414.414 0 0 1 .268-.732h3.617L10 3.578z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             ))}
//             <span className="ml-2 text-gray-600">{rating.date}</span>
//           </div>
//         </div>
//         <p className="text-gray-700">{rating.comment}</p>
//       </div>
//     ))}
//   </div>
// )}