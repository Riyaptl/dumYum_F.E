import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAnimationSpecials } from "../slices/animationSlice";
import image1 from "../assets/slider1.png";

const BannerSlider = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const specialImages = "http://localhost:8000/uploads/special/"
  const {animationLoading, animationSpecials} = useSelector((state) => state.animation)
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    dispatch(getAnimationSpecials())
  }, [])

  useEffect(() => {
    setSpecials([
      {name: "We are, Handmade", tagline: "Handmade", images: ""},
      ...animationSpecials
    ])
  },[animationSpecials])

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
  };

  const handleShop = (id) =>{
    navigate(`/${id}?page=special`)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-full overflow-hidden relative">
        <Slider {...settings} ref={sliderRef}>
          {specials.map((animation, index) => (
            <div key={index} className="w-full h-[60vh] md:h-auto flex items-center justify-center relative">
              {animation.images.length > 0 ?
                <img src={specialImages+animation.images[0]} alt={`Image ${animation.name}`} className="w-full h-[85vh] object-cover " /> :
                <img src={image1} alt={`Image ${animation.name}`} className="w-full h-[85vh] object-cover " />
              }
              <div className="absolute top-1/3 md:top-1/2 left-10 text-left text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{animation.name}</h2>
                <p className="text-lg md:text-xl mb-4">{animation.tagline}</p>
                <p className="text-lg md:text-xl mb-8">{animation.description}</p>
                <button onClick={() => handleShop(animation._id)} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 px-8 py-2 mb-4 text-white">
                    Explore Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="pt-8 absolute bottom-8 left-4 flex justify-start gap-3">
          <button onClick={handlePrev} className="border border-black bg-transparent hover:bg-white duration-300 p-2 rounded-full text-black"></button>
          <button onClick={handleNext} className="border border-black bg-transparent rounded-full hover:bg-white duration-300 p-2 text-black"></button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
