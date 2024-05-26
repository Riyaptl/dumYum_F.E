import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import BannerSlider from '../component/BannerSlider'
import SpecialSlider from '../component/SpecialSlider'
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import VideoSection from '../component/VideoSection'
import ExploreSlider from '../component/ExploreSlider'
import { useDispatch, useSelector } from 'react-redux'
import Newsletter from '../component/Newsletter'
import Tagline from '../component/Tagline'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getCategories } from '../slices/categorySlice'
import { getSpecials } from '../slices/specialSlice'
import ExploreFixed from '../component/ExploreFixed'
import SpecialFixed from '../component/specialFixed'
import Announcement from '../component/Announcement'

const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false)
  const controls = useAnimation()
  const { categories } = useSelector((state) => state.category)
  const { specials } = useSelector((state) => state.special)
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSpecials())
  }, [])

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage('home')
      }
      setIsVisible(true);
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isVisible || isNewsletterVisible) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 100 })
    }
  }, [isVisible, isNewsletterVisible])

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-18 ">
        <BannerSlider />
        <motion.div
          className="my-10"
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <Tagline tagline="All parcels are dispatched with ice packs or dry ice to ensure maximum product freshness until delivery!" />
        </motion.div>
        {categories?.length > 3 
        ? 
          <ExploreSlider />
        :
          <ExploreFixed/>
        }
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
        {specials?.length > 3 
        ? 
          <SpecialSlider />
        :
          <SpecialFixed/>
        }
        <motion.div
          className="my-12"
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          onAnimationComplete={() => setIsNewsletterVisible(true)}
        >
          <Newsletter />
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
