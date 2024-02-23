// import React, { useState, useEffect } from 'react';
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const SpecialSlider = () => {
//   const cardsData = [
//     { id: 1, name: 'Card 1', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 2, name: 'Card 2', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 3, name: 'Card 3', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 4, name: 'Card 4', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 5, name: 'Card 5', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 6, name: 'Card 6', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 7, name: 'Card 7', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//     { id: 8, name: 'Card 8', imageUrl: 'https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775' },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentSlide(prevSlide => (prevSlide === cardsData.length - 1 ? 0 : prevSlide + 1));
//       setTimeout(() => setIsAnimating(false), 1000); 
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentSlide(prevSlide => (prevSlide === 0 ? cardsData.length - 1 : prevSlide - 1));
//       setTimeout(() => setIsAnimating(false), 1000); 
//     }
//   };

//   return (
//     <div className="w-full flex justify-center py-8">
//     <div className=" ">
//     <h2 className="text-black font-serif text-center text-3xl "> Explore Our Chocolates </h2>
//     <div className="slider container mx-auto w-full relative ">
//       <div
//         className={`slider overflow-x-auto flex justify-center items-center transition-transform duration-1000 ${
//           isAnimating ? 'slide-animation' : ''
//         }`}
//       >
//         {[...cardsData, ...cardsData, ...cardsData].slice(currentSlide, currentSlide + 4).map(card => (
//           <div
//             key={card.id}
//             className="card flex-none w-full sm:w-80 mr-4 p-4 bg-white hover:scale-100 transition-transform duration-300 delay-75"
//           >
//             <img
//               src={card.imageUrl}
//               alt={card.name}
//               className="w-full  mb-2 hover:scale-105 transition-transform duration-300"
//               style={{ maxHeight: '250px' }}
//             />
//             <h3 className="text-xl font-semibold mb-2 items-center">{card.name}</h3>
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2  text-3xl bg-transparent  transform -translate-y-1/2 -translate-x-3 border border-slate-200 rounded-2xl"
//         onClick={prevSlide}
//       >
//         <FiChevronLeft />
//       </button>
//       <button
//         className="absolute right-0  top-1/2  text-3xl transform -translate-y-1/2 translate-x-3  bg-transparent border border-slate-200 rounded-2xl"
//         onClick={nextSlide}
//       >
//         <FiChevronRight />
//       </button>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default SpecialSlider;

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const SpecialSlider = () => {
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

export default SpecialSlider;