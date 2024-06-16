import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const VideoSection = () => {

  return (
    <div
      className="relative w-full h-auto flex flex-col justify-center items-center py-8 bg-gray-100 "
    >
      <div className="text-center  m-auto max-w-[1800px] mx-auto">
        <h1 className="cedarville-cursive-regular text-lg lg:text-3xl text-black font-cursive font-semibold mb-6 text-center">
          Sweet Story
        </h1> 
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
