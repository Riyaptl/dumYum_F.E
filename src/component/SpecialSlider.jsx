import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import {getSpecials} from "../slices/specialSlice"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SpecialSlider = () => {
  const sliderRef = useRef(null);
  const [hoveredSpecial, setHoveredSpecial] = useState(null);
  const navigate = useNavigate();
  const {specials} = useSelector((state) => state.special)
  const specialImages = "http://localhost:8000/uploads/special/"
  const [image, setImage] = useState(null)

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleShop = (id) =>{
    navigate(`/${id}?page=special`)
  }

  const handleHover = (special) =>{
    setHoveredSpecial(special)
  }

  const handleNormal = () =>{
    setHoveredSpecial(null)
  }

  return (
    (<div className="w-full flex justify-center py-14 relative">
      <div className="w-11/12">
        <div className="text-center pb-8">
          <h2 className="text-black font-serif text-center text-3xl ">
            Special Chocolate
          </h2>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {specials.map((special) => {
            return (
              <div onClick={() => handleShop(special._id)}
                key={special._id}
                className="px-5 relative overflow-hidden"
                onMouseEnter={() => handleHover(special)}
                onMouseLeave={handleNormal}
                >
                {special.smallImages.length > 1 ? 
                  <img
                    src={
                      hoveredSpecial === special ? specialImages+special.smallImages[1] : specialImages+special.smallImages[0] 
                    }
                    alt={special.name}
                    className="w-full h-72 object-cover transition-transform transform hover:scale-110"
                    />                 
                  :
                  <img
                  src={image1}
                  alt={special.name}
                  className="w-full h-72 object-cover transition-transform transform hover:scale-110"
                  />
                }
                {hoveredSpecial === special && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-transparent text-white px-4 py-2 rounded">
                      <h2 className="text-lg font-semibold">{special.name}</h2>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Slider>
        <button
          onClick={handlePrev}
          className=" bg-white border border-slate-200 rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black mr-5 absolute left-14 top-1/2 transform -translate-y-1/2"
        >
          <TiArrowLeftThick />
        </button>
        <button
          onClick={handleNext}
          className="border border-slate-200 bg-white rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black ml-5 absolute right-14 top-1/2 transform -translate-y-1/2"
        >
          <TiArrowRightThick />
        </button>
      </div>
    </div>)
  );
};

export default SpecialSlider;