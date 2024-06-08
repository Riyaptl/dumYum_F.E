import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import image1 from '../assets/slider1.png'

const SpecialFixed = () => {
  const [hoveredSpecial, setHoveredSpecial] = useState(null)
  const [delayedSpecial, setDelayedSpecial] = useState(null)
  const navigate = useNavigate()
  const { specials } = useSelector((state) => state.special)
  const specialImages = `${import.meta.env.VITE_APP_SPECIAL_URL}`

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
          <h2 className="text-black font-serif text-center text-3xl">
            Special Chocolate
          </h2>
        </div>
        <div className="flex justify-center flex-wrap">
          {specials.map((special) => (
            <div
              onClick={() => handleShop(special._id)}
              key={special._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 relative overflow-hidden cursor-pointer" // Set responsive width for each box
              onMouseEnter={() => handleHover(special)}
              onMouseLeave={handleNormal}
            >
                <img
                  src={
                    delayedSpecial === special && special.smallImages.length > 1
                      ? specialImages + special.smallImages[1]
                      : special.smallImages.length > 0
                      ? specialImages + special.smallImages[0]
                      : image1
                  }
                  alt={special.name}
                  className="w-full h-72 object-cover transition-transform duration-700 transform hover:scale-105"
                  style={{
                    transitionDelay: '0s',
                    transform:
                      delayedSpecial === special ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpecialFixed
