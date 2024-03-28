import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image2 from "../assets/slider2.png";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getCategories} from "../slices/categorySlice"


const ExploreSlider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const {categories} = useSelector((state) => state.category)
  const categoryImages = "http://localhost:8000/uploads/category/"


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
          slidesToShow: 3,
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
    navigate(`/${id}?page=category`)
  }

  return (
    <div className="w-full flex bg-fuchsia-50 justify-center py-14">
      <div className="w-11/12">
        <div className="text-center pb-8">
        <h2 className="text-black font-serif text-center text-3xl "> Explore Our Chocolates </h2>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {categories.map((category) => {
            return (
              <div key={category._id} className="px-5 relative">
                {category.smallImages.length > 0 ?
                <img
                  src={categoryImages+category.smallImages[0]}
                  alt={category.name}
                  className="w-full h-80 object-cover  transform transition-transform hover:scale-105"
                /> :
                <img
                  src={image2}
                  alt={category.name}
                  className="w-full h-80 object-cover  transform transition-transform hover:scale-105"
                />
                }
                <div className="text-center pt-4">
                  <h2 className="text-lg font-semibold">{category.name}</h2>
                  <h2 className="text-lg font-semibold">{category.tagline}</h2>
                </div>
                <button onClick={() => handleShop(category._id)} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 px-4 py-2 rounded-full text-white absolute bottom-8" >
                    Shop Now
                </button>
              </div>
            );
          })}
        </Slider>
        <div className="pt-8 flex justify-center gap-5">
          <button
            onClick={handlePrev}
            className="border border-slate-300 bg-white rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black"
          >
            <TiArrowLeftThick />
          </button>
          <button
            onClick={handleNext}
            className="border border-slate-300 bg-white rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black"
          >
            <TiArrowRightThick />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSlider;