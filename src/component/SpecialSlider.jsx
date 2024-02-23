import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const SpecialSlider = () => {
  const sliderRef = useRef(null);
  const [hoveredTitle, setHoveredTitle] = useState("");

  const TourType = [
    {
      id: 1,
      image: image1,
      title: "City Tour",
    },
    {
      id: 2,
      image: image2,
      title: "Beach Party",
    },
    {
      id: 3,
      image: image1,
      title: "Museum Tour",
    },
    {
      id: 4,
      image: image2,
      title: "Cruise Ship",
    },
    {
      id: 5,
      image: image1,
      title: "Explore History",
    },
    {
      id: 6,
      image: image2,
      title: "Hiking & Diving",
    },
  ];

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

  return (
    <div className="w-full flex justify-center py-14 relative">
      <div className="w-11/12">
        <div className="text-center pb-8">
          <h2 className="text-black font-serif text-center text-3xl ">
            Special Chocolate
          </h2>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {TourType.map((TourType) => {
            return (
              <div
                key={TourType.id}
                className="px-5 relative overflow-hidden"
                onMouseEnter={() => setHoveredTitle(TourType.title)}
                onMouseLeave={() => setHoveredTitle("")}
              >
                <img
                  src={TourType.image}
                  alt={TourType.title}
                  className="w-full h-72 object-cover transition-transform transform hover:scale-110"
                />
                {hoveredTitle === TourType.title && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-transparent text-white px-4 py-2 rounded">
                      <h2 className="text-lg font-semibold">{TourType.title}</h2>
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
    </div>
  );
};

export default SpecialSlider;