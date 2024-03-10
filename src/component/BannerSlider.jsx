import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getAnimationSpecials} from "../slices/animationSlice"
import { getSpecials } from "../slices/specialSlice";
import image1 from "../assets/slider1.png";

const BannerSlider = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const specialImages = "http://localhost:8000/uploads/special/"
  const {animationLoading, animationSpecials} = useSelector((state) => state.animation)


  useEffect(() => {
    dispatch(getAnimationSpecials())
  }, [])

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
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden  relative">
        <Slider {...settings} ref={sliderRef}>
          {animationSpecials.map((animation, index) => (
            <div key={index} className="w-full h-[85vh] md:h-auto flex items-center justify-center relative">
              {animation.images.length > 0 ?
                <img src={specialImages+animation.images[0]} alt={`Image ${animation.name}`} className="w-full h-[85vh] object-cover " /> :
                <img src={image1} alt={`Image ${animation.name}`} className="w-full h-[85vh] object-cover " />
              }
              <div className="absolute top-1/2 left-4 text-left text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{animation.name}</h2>
                <p className="text-lg md:text-xl">{animation.tagline}</p>
                <p className="text-lg md:text-xl">{animation.description}</p>
                <div className="absolute">
                
                <button onClick={() => handleShop(animation._id)} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 px-8 py-2 rounded-full text-white absolute top-2">
                    Explore Now
                </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="pt-8 absolute bottom-8 left-4 flex justify-start gap-5">
          <button onClick={handlePrev} className="hover:border hover:border-black hover:bg-transparent  bg-white duration-300 p-4 rounded-full text-black"><TiArrowLeftThick /></button>
          <button onClick={handleNext} className="hover:border hover:border-black hover:bg-transparent  rounded-full bg-white  duration-300 p-4 text-black"><TiArrowRightThick /></button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;


