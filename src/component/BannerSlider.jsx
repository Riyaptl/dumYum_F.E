import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAnimationSpecials } from '../slices/animationSlice'
import image1 from '../assets/slider1.png'
import image2 from '../assets/slider2.png'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const specialImages = 'http://localhost:8000/uploads/special/'
  const { animationLoading, animationSpecials } = useSelector(
    (state) => state.animation,
  )
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    dispatch(getAnimationSpecials())
  }, [])

  useEffect(() => {
    setSpecials([
      { name: 'We are, Handmade', tagline: 'Handmade', images: '' },
      ...animationSpecials,
    ])
  }, [animationSpecials])

  const settings = {
      dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  }

  const handleShop = (id) => {
    navigate(`/${id}?page=special`)
  }

  return (
    <div className="h-[100vh] overflow-hidden">
      <Slider {...settings}>
        {specials.map((animation, index) => (
          <div key={index} className="relative w-full h-full">
            <div className="w-full h-[100vh] relative">
              <img
                src={specialImages + animation.images[0]}
                alt={`Image ${animation.name}`}
                width={1200}
                height={700}
                className="w-full h-full object-cover"
              />{' '}
              :{' '}
              <img
                src={image1}
                alt={`Image ${animation.name}`}
                className="w-full h-[85vh] object-cover "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            </div>
            <div className="w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="cedarville-cursive-regular text-lg lg:text-3xl text-black font-cursive font-semibold mb-4">
                {animation.name}
              </h2>
              <h1 className="text-3xl lg:text-6xl font-bold mb-5">
                {animation.tagline}
              </h1>
              <p className="text-lg">{animation.description}</p>
              <button
                onClick={() => handleShop(animation._id)}
                className="bg-transparent border border-black hover:bg-black  duration-300 px-8 py-2 mb-4 text-white"
              >
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomeScreen
