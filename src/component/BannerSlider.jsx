import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const BannerSlider = () => {
  const sliderRef = useRef(null);

  const sliderContent = [
    {
      id: 1,
      image: "https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775",
      title: "Discover Paradise...",
      subtitle: "Your Gateway to Dreams...",
      text: "Explore dreamy destinations. Your next adventure awaits!"
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1634513475/photo/autumn-or-fall-leaves-in-floral-watercolor-background-for-thanksgiving-or-fall-designs-orange.jpg?s=1024x1024&w=is&k=20&c=1s0SERQqzjK3QvYvNvySyB3Z63yXNo8KY9gwwT3s-kY=",
      title: "Journey to Serenity...",
      subtitle: "Where Tranquility Beckons...",
      text: "Seek tranquil landscapes. Find peace in beauty."
    },
  ];

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

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden  relative">
        <Slider {...settings} ref={sliderRef}>
          {sliderContent.map((slide, index) => (
            <div key={index} className="w-full h-[85vh] md:h-auto flex items-center justify-center relative">
              <img src={slide.image} alt={`Image ${slide.id}`} className="w-full h-[85vh] object-cover " />
              <div className="absolute top-1/2 left-4 text-left text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                <p className="text-lg md:text-xl">{slide.text}</p>
                {/* <div className="absolute">
                {index === 0 && (
                  <button className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 px-4 py-2 rounded-full text-white absolute bottom-8">
                    Explore Now
                  </button>
                )}
                </div> */}
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


