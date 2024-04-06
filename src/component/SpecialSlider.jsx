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

const SpecialSlider = () => {
  const sliderRef = useRef(null)
  const [hoveredSpecial, setHoveredSpecial] = useState(null)
  const [delayedSpecial, setDelayedSpecial] = useState(null)
  const navigate = useNavigate()
  const { specials } = useSelector((state) => state.special)
  const specialImages = 'http://localhost:8000/uploads/special/'

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  const handleShop = (id) => {
    navigate(`/${id}?page=special`)
  }

  const handleHover = (special) => {
    setHoveredSpecial(special)
    const timerId = setTimeout(() => {
      setDelayedSpecial(special)
    }, 300)
    return () => clearTimeout(timerId)
  }

  const handleNormal = () => {
    setHoveredSpecial(null)
    setDelayedSpecial(null)
  }

  return (
    <div className="w-full flex justify-center pb-14 relative">
      <div className="w-11/12">
        <div className="text-center pb-8">
          <h2 className="text-black font-serif text-center text-3xl ">
            Special Chocolate
          </h2>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {specials.map((special) => {
            return (
              <div
                onClick={() => handleShop(special._id)}
                key={special._id}
                className="px-5 relative overflow-hidden"
                onMouseEnter={() => handleHover(special)}
                onMouseLeave={handleNormal}
              >
                {special.smallImages.length > 1 ? (
                  <img
                    src={
                      delayedSpecial === special &&
                      special.smallImages.length > 1
                        ? specialImages + special.smallImages[1]
                        : special.smallImages.length > 0
                        ? specialImages + special.smallImages[0]
                        : specialImages + special.smallImages[1]
                    }
                    alt={special.name}
                    className="w-full h-72 object-cover transition-transform duration-700 transform hover:scale-105"
                    style={{
                      transitionDelay: '0s',
                      transform:
                        delayedSpecial === special ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                ) : (
                  <img
                    src={image1}
                    alt={special.name}
                    className="w-full h-72 object-cover transition-transform duration-700 transform hover:scale-110"
                  />
                )}
                {hoveredSpecial === special && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <motion.div
                      className="bg-transparent text-white font-extrabold px-4 py-2 rounded"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}

                    >
                      <h2 className="text-2xl font-extrabold">{special.name}</h2>
                    </motion.div>
                  </div>
                )}
              </div>
            )
          })}
        </Slider>
        <button
          onClick={handlePrev}
          className=" bg-white border border-slate-200 rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black mr-5 absolute left-14 top-1/2 transform -translate-y-1/2 hidden md:block"
        >
          <TiArrowLeftThick />
        </button>
        <button
          onClick={handleNext}
          className="border border-slate-200 bg-white rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black ml-5 absolute right-14 top-1/2 transform -translate-y-1/2 hidden md:block"
        >
          <TiArrowRightThick />
        </button>
      </div>
    </div>
  )
}

export default SpecialSlider
