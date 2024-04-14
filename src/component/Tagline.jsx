import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tagline = ({ tagline }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: false })

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <motion.div
      className="md:w-2/5 mx-auto text-center"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    >
      <div className="flex  h-full max-w-3xl mx-auto text-center justify-center align-middle flex-col ">
        <hr className=" border-double  mb-4 w-16 mx-auto" />
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
