import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image2 from '../assets/slider2.png'
import image1 from '../assets/slider1.png'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../slices/categorySlice'

const ExploreSlider = () => {
  const sliderRef = useRef(null)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [delayedCategory, setDelayedCategory] = useState(null)
  const [prevHoveredCategory, setPrevHoveredCategory] = useState(null)
  const navigate = useNavigate()
  const { categories } = useSelector((state) => state.category)
  const categoryImages = 'http://localhost:8000/uploads/category/'

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  useEffect(() => {
    if (hoveredCategory) {
      const timerId = setTimeout(() => {
        setDelayedCategory(hoveredCategory)
      }, 500)
      return () => clearTimeout(timerId)
    }
  }, [hoveredCategory])

  const handleShop = (id) => {
    navigate(`/${id}?page=category`)
  }

  const handleImageClick = (id) => {
    navigate(`/${id}?page=category`)
  }

  const handleHover = (category) => {
    setPrevHoveredCategory(hoveredCategory)
    setHoveredCategory(category)
  }

  const handleNormal = () => {
    setHoveredCategory(prevHoveredCategory)
  }

  return (
    <div className="w-full flex bg-gray-50 justify-center py-14">
      <div className="w-11/12">
        <div className="text-center pb-8">
          <h2 className="text-black font-serif text-center text-3xl">
            Explore Our Chocolates
          </h2>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {categories.map((category) => {
            return (
              <div key={category._id} className="px-5 relative">
                <div
                  className="cursor-pointer relative overflow-hidden"
                  onClick={() => handleImageClick(category._id)}
                  onMouseEnter={() => handleHover(category)}
                  onMouseLeave={handleNormal}
                >
                  {category.smallImages.length > 0 ? (
                    <img
                      src={
                        delayedCategory === category &&
                        category.smallImages.length > 0
                          ? categoryImages + category.smallImages[0]
                          : categoryImages + category.smallImages[1]
                      }
                      alt={category.name}
                      className="w-full h-80 object-cover  transform transition-transform duration-700 hover:scale-110"
                      style={{
                        transitionDelay: '0.2s',
                        transform:
                          delayedCategory === category
                            ? 'scale(1.1)'
                            : 'scale(1)',
                      }}
                    />
                  ) : (
                    <img
                      src={image2}
                      alt={category.name}
                      className="w-full h-80 object-cover  transform transition-transform duration-700 hover:scale-110"
                      srcset={image1}
                    />
                    //   <img
                    //   src={
                    //     delayedCategory === category &&
                    //       category.smallImages.length > 0
                    //       ? image1
                    //       : image2
                    //   }
                    //   alt={category.name}
                    //   className="w-full h-80 object-cover  transform transition-transform duration-700 hover:scale-110"
                    //   style={{
                    //     transitionDelay: '0.2s',
                    //     transform:
                    //       (delayedCategory === category)
                    //         ? 'scale(1.1)'
                    //         : 'scale(1)',
                    //   }}
                    // />
                  )}
                </div>
                <div className="text-center pt-4">
                  <h2 className="text-lg font-semibold">{category.name}</h2>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ExploreSlider
