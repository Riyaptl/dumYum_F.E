import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const VideoSection = () => {

  return (
    <div
      className="relative w-full h-auto flex flex-col justify-center items-center py-16 bg-gray-100 "
    >
      <div className="text-center   px-4 m-auto max-w-[1800px] mx-auto">
        <h1 className="text-3xl md:text-6xl  mb-4 text-gray-800">
          Sweet Story
        </h1>
        <p className="text-sm md:text-lg mb-8 text-gray-600 ">
          WITH OUR UNIQUE TAKE ON THE PROFESSION OF A PASTRY CHEF, WE
          REVOLUTIONIZE EVEN THE MOST FIRMLY ENTRENCHED TRADITIONS.
        </p>
        <div className="mr-auto ml-auto">
          <iframe
            className="  w-[290px] h-[164px] md:w-[725px] md:h-[410px] xl:w-[1344px] xl:h-[756px] rounded-lg shadow-lg mx-auto "
            src="https://www.youtube.com/embed/Zv11L-ZfrSg?si=uJNkywoczLomsVhq" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Sweet Story Video"
            width='full'
            height='full'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
