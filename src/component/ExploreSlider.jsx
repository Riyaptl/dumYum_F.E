import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const ExploreSlider = () => {
  const sliderRef = useRef(null);

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

  return (
    <div className="w-full flex bg-fuchsia-50 justify-center py-14">
      <div className="w-11/12">
        <div className="text-center pb-8">
        <h2 className="text-black font-serif text-center text-3xl "> Explore Our Chocolates </h2>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {TourType.map((TourType) => {
            return (
              <div key={TourType.id} className="px-5 relative">
                <img
                  src={TourType.image}
                  alt={TourType.title}
                  className="w-full h-80 object-cover  transform transition-transform hover:scale-105"
                />
                <div className="text-center pt-4">
                  <h2 className="text-lg font-semibold">{TourType.title}</h2>
                </div>
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