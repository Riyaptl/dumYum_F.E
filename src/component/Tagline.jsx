import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tagline = ({ tagline }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <motion.div
      className="w-full px-4 md:px-0 md:w-2/3 lg:w-1/2 mx-auto text-center"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full max-w-3xl mx-auto text-center justify-center items-center flex-col py-8 font-sans">
        <p className="text-xl font-medium  text-black">
          {tagline.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <hr className="border-gray-800 mt-4 w-16 mx-auto" />
      </div>
    </motion.div>
  )
}

export default Tagline
