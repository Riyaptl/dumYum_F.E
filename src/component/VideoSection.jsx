import React, { useState, useRef } from 'react';
import { IoPlay, IoClose } from 'react-icons/io5';
// import video from '../assets/video.mp4';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleVideoClick = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleCancelClick = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      className="relative w-full h-screen md:h-[90vh] flex justify-center items-center py-8"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter backdrop-blur-sm max-w-[90%] m-auto rounded-lg"
        style={{
          backgroundImage: `url('https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 max-w-[90%] m-auto"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl md:text-7xl font-serif mb-4">Sweet Story</h1>
        <p className="text-center mb-4 font-serif text-sm md:text-lg">
          WITH OUR UNIQUE TAKE ON THE PROFESSION OF A PASTRY CHEF, WE
          REVOLUTIONIZE EVEN <br /> THE MOST FIRMLY ENTRENCHED TRADITIONS.
        </p>
        {isPlaying ? (
          <button
            className="bg-white hover:bg-transparent hover:border text-white font-bold py-3 px-3 md:py-5 md:px-5 rounded-full transition-colors duration-300 absolute top-3 right-3"
            onClick={handleCancelClick}
          >
            <IoClose className="text-black text-xl md:text-2xl hover:text-white " />
          </button>
        ) : (
          <div>
            <span className="mr-1 md:mr-3">Watch </span>
            <button
              className="bg-white hover:bg-transparent hover:border text-white font-bold py-3 px-3 md:py-5 md:px-5 rounded-full transition-colors duration-300"
              onClick={handleVideoClick}
            >
              <IoPlay className="text-black text-xl md:text-2xl hover:text-white " />
            </button>
            <span className="ml-1 md:ml-3">Video </span>
          </div>
        )}
      </div>
      {isPlaying && (
        <div className="absolute inset-0 flex justify-center items-center">
          <video
            ref={videoRef}
            className="max-w-full max-h-full"
            src={video}
            controls
            autoPlay
            onEnded={handleVideoEnd}
            width="1920"
            height="1080"
          ></video>
        </div>
      )}
    </motion.div>
  );
};

export default VideoSection;
