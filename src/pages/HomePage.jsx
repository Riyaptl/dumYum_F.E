import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import BannerSlider from '../component/BannerSlider'
import SpecialSlider from '../component/SpecialSlider'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import VideoSection from '../component/VideoSection'
import ExploreSlider from '../component/ExploreSlider'
import { useSelector } from 'react-redux'
import Newsletter from '../component/Newsletter'
import Tagline from '../component/Tagline'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage('home')
      }
      setIsVisible(true)
      clearTimeout(timeoutId)
      const timeoutId = setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 100 })
    }
  }, [isVisible])

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 ">
        <BannerSlider />
        <motion.div
          className="my-10"
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <Tagline tagline="All parcels are dispatched with ice packs or dry ice to ensure maximum product freshness until delivery!" />
        </motion.div>
        <ExploreSlider />
        <motion.div
          className="my-12"
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
        >
          <VideoSection />
        </motion.div>
        <motion.div
          className="my-12"
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.8 }}
          ref={ref}
        >
          <Tagline tagline="All parcels are dispatched with ice packs or dry ice to ensure maximum product freshness until delivery!" />
        </motion.div>
        <SpecialSlider />
        <motion.div
          className="my-12"
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
        >
          <Newsletter />
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
