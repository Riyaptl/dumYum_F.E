import React, { useRef, useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import Slider from 'react-slick'

const SingleProductPage = () => {
  const sliderRef = useRef(null)
  const [pincode, setPincode] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')

  const productData = {
    title: 'Iron Rich Dark Chocolate : Pack of 4',
    price: '399/- Rs',
    description:
      "Elevate your chocolate experience with Dumyum Chocolate's Pack of Iron-Rich Delights, a sumptuous collection of four dark chocolate bars infused with nature's goodness. Indulge in the sophisticated fusion of flavors, including luscious cranberries, wholesome dry fruits, crunchy dried seeds, and nutty peanuts.\n\nWhat makes this collection truly exceptional is its rich iron content, tailor-made for women seeking a delightful way to meet their daily nutritional needs. Backed by rigorous lab testing, our Pack of Iron-Rich Chocolate bars delivers a remarkable 60% of the recommended 18 mg daily iron intake for women.\n\nThis Pack Of 4 Chocolates are...\n\nCranberries Delight:\nImmerse yourself in the rich and tangy burst of flavor with our Cranberries Delight. Each bite is a delightful combination of velvety dark chocolate and succulent cranberries, creating a harmonious blend that tantalizes your taste buds.\n\nNutty Dry Fruits Fusion:\nExperience the perfect marriage of indulgence and wholesomeness in our Nutty Dry Fruits Fusion. This bar features the exquisite taste of dark chocolate interwoven with the goodness of assorted dry fruits, providing a satisfying crunch and a symphony of flavors with every bite.\n\nCrunchy Dried Seeds Symphony:\nEmbark on a crunchy journey with our Crunchy Dried Seeds Symphony. This unique chocolate bar combines the deep richness of dark chocolate with an array of dried seeds, delivering a delightful textural experience that is both satisfying and invigorating.\n\nPeanut Perfection:\nSavor the nutty charm of our Peanut Perfection. Indulge in the classic combination of dark chocolate and premium peanuts, creating a harmonious blend of sweetness and crunch. It's a timeless pairing that promises a satisfying and comforting chocolate experience.\n\nEvery flavor in Dumyum Chocolate's Pack of Iron-Rich Delights is crafted with precision, ensuring a symphony of tastes that cater to both your sweet cravings and your body's iron needs. Try them all and discover a world where exquisite flavors meet nutritional excellence.",
    images: [
      'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00733_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
      'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00729_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
      'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00737_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
      'https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00735_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700',
    ],
    ratings: [
      {
        user: 'User 1',
        rating: 4,
        date: '2024-03-01',
        comment: 'Great product!',
      },
      {
        user: 'User 2',
        rating: 5,
        date: '2024-03-02',
        comment: 'Excellent quality chocolate!',
      },
      // Add more ratings if needed
    ],
  }

  const handlePincodeChange = (e) => {
    setPincode(e.target.value)
  }

  const handleAddToCart = () => {
    console.log('Product added to cart!')
  }

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

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="w-full h-[400px] lg:mb-4">
              <img
                src={productData.images[currentImage]}
                alt={productData.title}
                className="w-full h-full object-cover"
              />
            </div>
            <Slider {...settings} ref={sliderRef} initialSlide={currentImage}>
              {productData.images.map((image, index) => (
                <div key={index} onClick={() => handleImageClick(index)}>
                  <img src={image} alt={productData.title} className="w-full" />
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
                {productData.title}
              </h1>
              <p className="text-lg mb-1">{productData.price}</p>
              <p className="text-sm text-gray-500 mb-4">
                Delight your taste buds with our iron-rich dark chocolates.
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  className="border border-black bg-transparent bg-white duration-300 p-2 text-black mr-2"
                />
                <button className="hover:border hover:border-black hover:text-black hover:bg-transparent bg-black duration-300 p-2 text-white">
                  Check
                </button>
              </div>
              <div className="mt-2 border border-separate text-black flex items-center max-w-[26%]">
                <button
                  onClick={handleDecreaseQuantity}
                  className="px-4 py-2 border-r border-gray-400"
                >
                  -
                </button>
                <span className="px-8 py-2">{quantity}</span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="px-4 py-2 border-l border-gray-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-4 px-4 py-2 border border-separate text-black hover:border hover:border-black"
              >
                Add to Cart
              </button>
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
              <p>{productData.description}</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Reviews:</h2>
              {productData.ratings.map((rating, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 mb-4 shadow-md border border-gray-200"
                >
                  <div className="flex items-center mb-2">
                    <p className="text-lg font-semibold">{rating.user}</p>
                    <div className="flex items-center ml-4">
                      {/* Display star ratings */}
                      {Array.from({ length: rating.rating }, (_, i) => (
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
                      <span className="ml-2 text-gray-600">{rating.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{rating.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
