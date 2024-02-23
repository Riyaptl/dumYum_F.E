import React, { useState } from 'react'
import { IoPlay } from 'react-icons/io5'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = () => {
    setIsPlaying(true)
  }

  const handleCancelClick = () => {
    setIsPlaying(false)
  }

  return (
    <div className="relative w-full h-[80vh] flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center filter backdrop-blur-sm max-w-[90%] m-auto rounded-lg"
        style={{
          backgroundImage: `url('https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775')`,
        }}
      ></div>
      {/* Light black layer */}
      <div className="absolute inset-0 bg-black opacity-50 max-w-[90%] m-auto"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-serif mb-4">Sweet Story</h1>
        <p className="text-center mb-4 font-serif">
          WITH OUR UNIQUE TAKE ON THE PROFESSION OF A PASTRY CHEF, WE
          REVOLUTIONIZE EVEN <br /> THE MOST FIRMLY ENTRENCHED TRADITIONS.
        </p>

        {/* Conditional rendering for the video button or cancel button */}
        {isPlaying ? (
          <button
            className="bg-white hover:bg-transparent hover:border text-white font-bold py-5 px-5 rounded-full transition-colors duration-300"
            onClick={handleCancelClick}
          >
            Cancel Video
          </button>
        ) : (
          <div>
            <span className='mr-3'>Watch </span>
            <button
              className="bg-white hover:bg-transparent hover:border text-white font-bold py-5 px-5 rounded-full transition-colors duration-300"
              onClick={handleVideoClick}
            >
              <IoPlay className="text-black text-2xl hover:text-white " />
            </button>
            <span className='ml-3'>Video </span>
          </div>
        )}
      </div>
      {isPlaying && (
        <div className="absolute inset-0 flex justify-center items-center">
          <video
            className="max-w-full max-h-full"
            src="path_to_your_video.mp4"
            controls
            autoPlay
          ></video>
        </div>
      )}
    </div>
  )
}

export default VideoSection
