import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Waddrob",
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.",
      image: "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 2,
      name: "John Waddrob",
      stars: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.",
      image: "https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 3,
      name: "John Waddrob",
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!",
      image: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="testimonials py-10 bg-gray-100 text-gray-700 text-center">
      <div className="w-11/12 testimonial-inner max-w-screen-lg mx-auto overflow-hidden px-4 relative">
        <h1 className="text-black font-serif text-center text-3xl">Clients testimonial</h1>
        <div className="border h-1  w-24 mx-auto mb-8"></div>

        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="w-full sm:w-full md:w-full px-4 mb-8">
                  <div className="testimonial bg-white p-6 rounded-lg">
                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <div className="name text-xl text-black">{testimonial.name}</div>
                    <div className="flex justify-center stars text-yellow-500 mb-4">
                      {[...Array(testimonial.stars)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
          onClick={handlePrev}
          className=" bg-white border border-slate-200 rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black mr-5 absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          <TiArrowLeftThick />
        </button>
        <button
          onClick={handleNext}
          className="border border-slate-200 bg-white rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black ml-5 absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <TiArrowRightThick />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
