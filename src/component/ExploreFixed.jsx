import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../assets/slider1.png'
import image2 from '../assets/slider2.png'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const ExploreFixed = () => {
//   const sliderRef = useRef(null)
  const [hoveredSpecial, setHoveredSpecial] = useState(null)
  const [delayedSpecial, setDelayedSpecial] = useState(null)
  const navigate = useNavigate()
  const { categories } = useSelector((state) => state.category)
  const categoryImages = `${import.meta.env.VITE_APP_CATEGORY_URL}`

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  const handleShop = (id) => {
    navigate(`/${id}?page=category`)
  }

  const handleHover = (category) => {
    setHoveredSpecial(category)
    const timerId = setTimeout(() => {
      setDelayedSpecial(category)
    }, 300)
    return () => clearTimeout(timerId)
  }

  const handleNormal = () => {
    setHoveredSpecial(null)
    setDelayedSpecial(null)
  }

  return (
    <div className="w-full flex justify-center pb-14 relative max-w-[1800px] mx-auto">
      <div className="w-11/12">
        <div className="text-center pb-8">
          <h2 className="text-black font-serif text-center text-3xl ">
          Explore Our Chocolates
          </h2>
        </div>
        <div className="flex justify-center flex-wrap">
        {categories.map((category) => (
              <div
                onClick={() => handleShop(category._id)}
                key={category._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 relative overflow-hidden cursor-pointer"
                onMouseEnter={() => handleHover(category)}
                onMouseLeave={handleNormal}
              >
                  <img
                    src={
                      delayedSpecial === category &&
                      category.smallImages.length > 1
                        ? categoryImages + category.smallImages[1]
                        : category.smallImages.length > 0
                        ? categoryImages + category.smallImages[1]
                        : image1
                    }
                    alt={category.name}
                    className="w-full h-72 object-cover transition-transform duration-700 transform hover:scale-105 cursor-pointer"
                    style={{
                      transitionDelay: '0s',
                      transform:
                        delayedSpecial === category ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                {hoveredSpecial === category && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <motion.div
                      className="bg-transparent text-white font-extrabold px-4 py-2 rounded"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-2xl font-extrabold">{category.name}</h2>
                    </motion.div>
                  </div>
                )}
              </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default ExploreFixed
