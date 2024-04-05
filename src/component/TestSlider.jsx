
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
// import { FaRegClock, FaRegStar } from "react-icons/fa";
// import { IoMdPerson } from "react-icons/io";
// import destinationImage1 from "../assets/slider1.png";
// import destinationImage2 from "../assets/slider2.png";
// import destinationImage3 from "../assets/slider1.png";
// import destinationImage4 from "../assets/slider2.png";
// import destinationImage5 from "../assets/slider1.png";
// import destinationImage6 from "../assets/slider2.png";

// const slides = [
//   {
//     image: destinationImage1,
//     title: "Majestic Wonders Expedition",
//     location: "Paris, France",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage2,
//     title: "Tropical Paradise Escape",
//     location: "Agra, India",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage3,
//     title: "Cultural Odyssey Experience",
//     location: "Tokyo, Japan",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage4,
//     title: "Adventure Seeker's Safari",
//     location: "Sydney, Australia",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage5,
//     title: "Enchanting Coastal Retreat",
//     location: "New York City, USA",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage6,
//     title: "Mountain Majesty Discovery",
//     location: "Rio de Janeiro, Brazil",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   // Add more items as needed
// ];

// const TestSlider = () => {
//   const sliderRef = useRef(null);

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full flex justify-center bg-fuchsia-50 pt-16">
//       <div className="w-11/12 text-center">
//         <p className="text-lg font-semibold py-1">
//           <span className="pl-12 pr-2 text-[#222222] bg-[#FF9933]">Popular</span> Destination
//         </p>
//         <p className="palanquin-dark-medium text-[#222222] text-3xl lg:text-4xl font-bold py-1">
//           Travel Most Popular Place <br />In The World
//         </p>
//         <div className="py-8">
//           <Slider ref={sliderRef} {...settings}>
//             {slides.map((data, index) => (
//               <div key={index} className="rounded overflow-hidden min-h-[480px] max-h-[520px] shadow-sm bg-white px-2">
//                 <img src={data.image} alt={data.title} className="w-full h-60 object-cover" />
//                 <div className="py-8 text-start">
//                   <div className="rounded text-[#7EB966]">
//                     <p className="w-2/4 px-1 rounded bg-[#F3F7F6]">{data.location}</p>
//                   </div>
//                   <p className="text-[#222222] text-xl py-4 font-bold">{data.title}</p>
//                   <p className="flex gap-3">
//                     <span className="flex items-center gap-2 text-slate-500">
//                       <FaRegClock className="text-[#FF9933]" />
//                       {data.duration}
//                     </span>
//                     <span className="flex items-center gap-2 text-slate-500">
//                       <IoMdPerson className="text-[#FF9933]" />
//                       {data.peoples}
//                     </span>
//                   </p>
//                   <p className="flex items-center gap-2 text-slate-500">
//                     <FaRegStar className="text-[#FF9933]" />
//                     {data.rating}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <div className="pt-8 flex justify-center gap-5">
//             <button onClick={handlePrev} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white">
//               <TiArrowLeftThick />
//             </button>
//             <button onClick={handleNext} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white">
//               <TiArrowRightThick />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestSlider;



// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

// const TestSlider = () => {
//   const sliderRef = useRef(null);

//   const sliderContent = [
//     {
//       id: 1,
//       image: "https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775",
//       title: "Discover Paradise...",
//       subtitle: "Your Gateway to Dreams...",
//       text: "Explore dreamy destinations. Your next adventure awaits!"
//     },
//     {
//       id: 2,
//       image: "https://media.istockphoto.com/id/1634513475/photo/autumn-or-fall-leaves-in-floral-watercolor-background-for-thanksgiving-or-fall-designs-orange.jpg?s=1024x1024&w=is&k=20&c=1s0SERQqzjK3QvYvNvySyB3Z63yXNo8KY9gwwT3s-kY=",
//       title: "Journey to Serenity...",
//       subtitle: "Where Tranquility Beckons...",
//       text: "Seek tranquil landscapes. Find peace in beauty."
//     },
//   ];

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 4000, 
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     centerMode: true,
//     centerPadding: "0",
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-center py-10">
//       <div className="w-full overflow-hidden  relative">
//         <Slider {...settings} ref={sliderRef}>
//           {sliderContent.map((slide, index) => (
//             <div key={index} className="w-full h-[75vh] md:h-auto flex items-center justify-center relative">
//               <img src={slide.image} alt={`Image ${slide.id}`} className="w-full h-[75vh] object-cover " />
//               <div className="absolute top-1/2 left-4 text-left text-white">
//                 <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
//                 <p className="text-lg md:text-xl">{slide.subtitle}</p>
//                 <p className="text-lg md:text-xl">{slide.text}</p>
//                 {/* <div className="absolute">
//                 {index === 0 && (
//                   <button className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 px-4 py-2 rounded-full text-white absolute bottom-8">
//                     Explore Now
//                   </button>
//                 )}
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </Slider>
//         <div className="pt-8 absolute bottom-8 left-4 flex justify-start gap-5">
//           <button onClick={handlePrev} className="hover:border hover:border-black hover:bg-transparent  bg-white duration-300 p-4 rounded-full text-black"><TiArrowLeftThick /></button>
//           <button onClick={handleNext} className="hover:border hover:border-black hover:bg-transparent  rounded-full bg-white  duration-300 p-4 text-black"><TiArrowRightThick /></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestSlider;










// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "../assets/slider1.png";
// import image2 from "../assets/slider2.png";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

// const TestSlider = () => {
//   const sliderRef = useRef(null);

//   const TourType = [
//     {
//       id: 1,
//       image: image1,
//       title: "City Tour",
//     },
//     {
//       id: 2,
//       image: image2,
//       title: "Beach Party",
//     },
//     {
//       id: 3,
//       image: image1,
//       title: "Museum Tour",
//     },
//     {
//       id: 4,
//       image: image2,
//       title: "Cruise Ship",
//     },
//     {
//       id: 5,
//       image: image1,
//       title: "Explore History",
//     },
//     {
//       id: 6,
//       image: image2,
//       title: "Hiking & Diving",
//     },
//   ];

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 420,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//   };

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="w-full flex justify-center py-14">
//       <div className="w-11/12">
//         <div className="text-center pb-8">
//           <p className="text-lg font-semibold py-1">
//             <span className="pl-12 pr-2 bg-[#FF9933]">Tour</span>Types
//           </p>
//           <p className="palanquin-dark-medium text-[#222222] text-3xl lg:text-4xl font-bold py-1">
//             Find Adventure in Life
//           </p>
//         </div>
//         <Slider {...settings} ref={sliderRef}>
//           {TourType.map((TourType) => {
//             return (
//               <div key={TourType.id} className="px-2 relative">
//                 <img
//                   src={TourType.image}
//                   alt={TourType.title}
//                   className="w-full h-80 object-cover rounded-lg transform transition-transform hover:scale-105"
//                 />
//                 <div className="text-center pt-4">
//                   <h2 className="text-lg font-semibold">{TourType.title}</h2>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//         <div className="pt-8 flex justify-center gap-5">
//           <button
//             onClick={handlePrev}
//             className="border border-slate-200 rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black"
//           >
//             <TiArrowLeftThick />
//           </button>
//           <button
//             onClick={handleNext}
//             className="border border-slate-200 rounded-full hover:bg-blackw hover:text-white duration-300 p-4 text-black"
//           >
//             <TiArrowRightThick />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestSlider;



// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "../assets/slider1.png";
// import image2 from "../assets/slider2.png";
// import image3 from "../assets/slider1.png";
// import image4 from "../assets/slider2.png";

// const photos = [
//   {
//     id: 1,
//     image: image1,
//     title: "Discover Paradise...",
//     subtitle: "Your Gateway to Dreams...",
//     text: "Explore dreamy destinations. Your next adventure awaits!",
//   },
//   {
//     id: 2,
//     image: image2,
//     title: "Journey to Serenity...",
//     subtitle: "Where Tranquility Beckons...",
//     text: "Seek tranquil landscapes. Find peace in beauty.",
//   },
//   {
//     id: 3,
//     image: image3,
//     title: "Explore the Extraordinary...",
//     subtitle: "Curated Adventures Await...",
//     text: "Experience curated travel. Every moment is a gem.",
//   },
//   {
//     id: 4,
//     image: image4,
//     title: "Wanderlust Unleashed..",
//     subtitle: "Embark on Your Story...",
//     text: "Unleash your wanderlust. Every journey is a story.",
//   },
// ];

// const settings = {
//     dots: true,
//   infinite: true,
//   speed: 2000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   fade: true,
//   cssEase: "linear",
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

// const TestSlider = () => {
//   return (
//     <div className="h-[100vh] overflow-hidden">
//       <Slider {...settings}>
//         {photos.map((photo) => {
//           return (
//             <div key={photo.id} className="relative w-full h-full">
//               <div className="w-full h-[100vh] relative">
                
//                 <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
//               </div>
//               <div className="w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//                 <h2 className="cedarville-cursive-regular text-lg lg:text-3xl text-[#EFC03E] font-cursive font-semibold mb-4">
//                   {photo.title}
//                 </h2>
//                 <h1 className="text-3xl lg:text-6xl font-bold mb-5">
//                   {photo.subtitle}
//                 </h1>
//                 <p className="text-lg">{photo.text}</p>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// };

// export default TestSlider;


// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
// import { FaRegClock, FaRegStar } from "react-icons/fa";
// import { IoMdPerson } from "react-icons/io";
// import destinationImage1 from "../assets/slider1.png";
// import destinationImage2 from "../assets/slider2.png";
// import destinationImage3 from "../assets/slider1.png";
// import destinationImage4 from "../assets/slider2.png";
// import destinationImage5 from "../assets/slider1.png";
// import destinationImage6 from "../assets/slider2.png";

// const slides = [
//   {
//     image: destinationImage1,
//     title: "Majestic Wonders Expedition",
//     location: "Paris, France",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage2,
//     title: "Tropical Paradise Escape",
//     location: "Agra, India",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage3,
//     title: "Cultural Odyssey Experience",
//     location: "Tokyo, Japan",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage4,
//     title: "Adventure Seeker's Safari",
//     location: "Sydney, Australia",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage5,
//     title: "Enchanting Coastal Retreat",
//     location: "New York City, USA",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   {
//     image: destinationImage6,
//     title: "Mountain Majesty Discovery",
//     location: "Rio de Janeiro, Brazil",
//     price: "999.99",
//     rating: "4.5",
//     peoples: "20",
//     duration: "3 Days 4 Night",
//   },
//   // Add more items as needed
// ];

// const TestSlider = () => {
//   const sliderRef = useRef(null);

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full flex justify-center bg-fuchsia-50 pt-16">
//       <div className="w-11/12 text-center">
//         <p className="text-lg font-semibold py-1">
//           <span className="pl-12 pr-2 text-[#222222] bg-[#FF9933]">Popular</span> Destination
//         </p>
//         <p className="palanquin-dark-medium text-[#222222] text-3xl lg:text-4xl font-bold py-1">
//           Travel Most Popular Place <br />In The World
//         </p>
//         <div className="py-8">
//           <Slider ref={sliderRef} {...settings}>
//             {slides.map((data, index) => (
//               <div key={index} className="rounded overflow-hidden min-h-[480px] max-h-[520px] shadow-sm bg-white px-2">
//                 <img src={data.image} alt={data.title} className="w-full h-60 object-cover" />
//                 <div className="py-8 text-start">
//                   <div className="rounded text-[#7EB966]">
//                     <p className="w-2/4 px-1 rounded bg-[#F3F7F6]">{data.location}</p>
//                   </div>
//                   <p className="text-[#222222] text-xl py-4 font-bold">{data.title}</p>
//                   <p className="flex gap-3">
//                     <span className="flex items-center gap-2 text-slate-500">
//                       <FaRegClock className="text-[#FF9933]" />
//                       {data.duration}
//                     </span>
//                     <span className="flex items-center gap-2 text-slate-500">
//                       <IoMdPerson className="text-[#FF9933]" />
//                       {data.peoples}
//                     </span>
//                   </p>
//                   <p className="flex items-center gap-2 text-slate-500">
//                     <FaRegStar className="text-[#FF9933]" />
//                     {data.rating}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <div className="pt-8 flex justify-center gap-5">
//             <button onClick={handlePrev} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white">
//               <TiArrowLeftThick />
//             </button>
//             <button onClick={handleNext} className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white">
//               <TiArrowRightThick />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestSlider;




// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "../assets/slider1.png";
// import image2 from "../assets/slider2.png";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

// const TestSlider = () => {
//   const sliderRef = useRef(null);
//   const [hoveredTitle, setHoveredTitle] = useState("");

//   const TourType = [
//     {
//       id: 1,
//       image: image1,
//       title: "City Tour",
//     },
//     {
//       id: 2,
//       image: image2,
//       title: "Beach Party",
//     },
//     {
//       id: 3,
//       image: image1,
//       title: "Museum Tour",
//     },
//     {
//       id: 4,
//       image: image2,
//       title: "Cruise Ship",
//     },
//     {
//       id: 5,
//       image: image1,
//       title: "Explore History",
//     },
//     {
//       id: 6,
//       image: image2,
//       title: "Hiking & Diving",
//     },
//   ];

//   const settings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 420,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//     ],
//   };

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="w-full flex justify-center py-14 relative">
//       <div className="w-11/12">
//         <div className="text-center pb-8">
//           <h2 className="text-black font-serif text-center text-3xl ">
//             Special Chocolate
//           </h2>
//         </div>
//         <Slider {...settings} ref={sliderRef}>
//           {TourType.map((TourType) => {
//             return (
//               <div
//                 key={TourType.id}
//                 className="px-5 relative overflow-hidden"
//                 onMouseEnter={() => setHoveredTitle(TourType.title)}
//                 onMouseLeave={() => setHoveredTitle("")}
//               >
//                 <img
//                   src={TourType.image}
//                   alt={TourType.title}
//                   className="w-full h-72 object-cover transition-transform transform hover:scale-110"
//                 />
//                 {hoveredTitle === TourType.title && (
//                   <div className="absolute inset-0 flex justify-center items-center">
//                     <div className="bg-transparent text-white px-4 py-2 rounded">
//                       <h2 className="text-lg font-semibold">{TourType.title}</h2>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </Slider>
//         <button
//           onClick={handlePrev}
//           className=" bg-white border border-slate-200 rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black mr-5 absolute left-14 top-1/2 transform -translate-y-1/2"
//         >
//           <TiArrowLeftThick />
//         </button>
//         <button
//           onClick={handleNext}
//           className="border border-slate-200 bg-white rounded-full hover:bg-black hover:text-white duration-300 p-4 text-black ml-5 absolute right-14 top-1/2 transform -translate-y-1/2"
//         >
//           <TiArrowRightThick />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestSlider;



import React, { useState } from 'react';

const HoverEffect = () => {


  const jsonData = {
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '#', isMegaMenu: true },
      { title: 'About', url: '/' },
      { title: 'B2B Connect', url: '/' },
    ],
    megaMenu: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      types: [{ title: 'Collections' }, { title: 'Our Specials' }],
    },
    feedback: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    offer: {
      message:
        'Special Offers: Get 20% off on selected items. Limited time only!',
    },
  };




  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div
        className="relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00735_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700"
          alt="Original Image"
          className={`w-64 h-64 transition-opacity duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00733_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700"
          alt="Hovered Image"
          className={`w-64 h-64 absolute top-0 left-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default HoverEffect;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../slices/categorySlice';
import { getSpecials } from '../slices/specialSlice';
import { logOut } from '../slices/authSlice';
import { motion, useAnimation } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
} from 'react-icons/fa';
import logo from '../assets/Logo.jpg';

const Navbar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { specials } = useSelector((state) => state.special);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showMeetTheMasterDropdown, setShowMeetTheMasterDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const jsonData = {
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '#', isMegaMenu: true },
      { title: 'About', url: '/' },
      { title: 'B2B Connect', url: '/' },
    ],
    megaMenu: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      types: [{ title: 'Collections' }, { title: 'Our Specials' }],
    },
    feedback: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    offer: {
      message:
        'Special Offers: Get 20% off on selected items. Limited time only!',
    },
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSpecials());
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0);
  };

  const navbarControls = useAnimation();

  useEffect(() => {
    navbarControls.start({ y: isSticky ? 1 : 1 });
  }, [isSticky, navbarControls]);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowProductsDropdown(false);
    setShowMeetTheMasterDropdown(false);
  };

  const handleProductsHover = () => {
    setShowProductsDropdown(true);
    setShowMeetTheMasterDropdown(false);
  };

  const handleMeetTheMasterHover = () => {
    setShowMeetTheMasterDropdown(true);
    setShowProductsDropdown(false);
  };

  const handleDropdownLeave = () => {
    setShowProductsDropdown(false);
    setShowMeetTheMasterDropdown(false);
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 bg-white shadow-md ${isSticky ? 'animate-sticky' : ''}`}
      style={{ zIndex: 1000 }}
      animate={navbarControls}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <div className="offer-bar bg-gray-100 text-black p-2 text-center">
        <p>{jsonData.offer.message}</p>
      </div>
      <div className="wrapper bg-white text-black px-4 py-6 flex justify-between items-center max-w-[90%] w-full mx-auto relative">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 md:h-12" />
          </Link>
        </div>
        <div className="flex items-center">
          {showMenu ? (
            <FaTimes
              onClick={handleMenuClick}
              className="btn close-btn text-gray-700 text-xl lg:hidden"
            />
          ) : (
            <FaBars
              onClick={handleMenuClick}
              className="menu-icon cursor-pointer lg:hidden text-gray-700 text-xl"
            />
          )}
          <ul className={showMenu ? 'nav-links lg:hidden' : 'nav-links hidden lg:flex'}>
            {jsonData.menuItems.map((menuItem, index) => (
              <li key={index} className="relative">
                <Link
                  to={menuItem.url}
                  className="text-text-black py-2 px-4 block"
                  onMouseEnter={
                    menuItem.title === 'Products' ? handleProductsHover : 
                    menuItem.title === 'Meet the Master' ? handleMeetTheMasterHover : 
                    null
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  {menuItem.title}
                </Link>
                {menuItem.isMegaMenu && showProductsDropdown && (
                  <div className="mega-box bg-white shadow-lg md:shadow-none absolute top-full left-0 self-center w-full h-[35vh] lg:w-[40vw] p-4 z-20" onMouseEnter={handleProductsHover} onMouseLeave={handleDropdownLeave}>
                    <div className="content flex flex-row">
                      <div className="hidden md:block md:w-1/2">
                        <img
                          src={jsonData.megaMenu.imageUrl}
                          alt="Mega Menu Image"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="row w-full lg:w-1/2 flex justify-evenly ml-4">
                        <div className="">
                          <ul className="mega-links">
                            <header className="text-lg font-semibold mb-2">
                              {jsonData.megaMenu.types[0].title}
                            </header>
                            {categories.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={`/${item._id}?page=category`}
                                  className="text-gray-900 py-1 block"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="">
                          <ul className="mega-links">
                            <header className="text-lg font-semibold mb-2">
                              {jsonData.megaMenu.types[1].title}
                            </header>
                            {specials.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={`/${item._id}?page=special`}
                                  className="text-gray-900 hover:text-gray-500 py-1 block"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li className="relative">
              <button
                onClick={handleMeetTheMasterHover}
                className="text-black py-2 px-4 block focus:outline-none"
                onMouseEnter={handleMeetTheMasterHover}
                onMouseLeave={handleDropdownLeave}
              >
                Meet the Master
              </button>
              {showMeetTheMasterDropdown && (
                <div className="meet-chef-dropdown bg-white shadow-lg md:shadow-none absolute top-full right-0 w-full h-[70vh] lg:w-[40vw] md:h-[35vh] p-4 z-20" onMouseEnter={handleMeetTheMasterHover} onMouseLeave={handleDropdownLeave}>
                  <div className="content flex flex-wrap justify-between flex-col sm:flex-row">
                    <div className="row lg:w-1/2 sm:w-1/3 w-full">
                      <img
                        src={jsonData.feedback.imageUrl}
                        alt=""
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="row md:w-1/2 w-full  md:pl-4">
                      <p className="text-gray-900">{jsonData.feedback.story}</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="menu-right flex items-center text-black text-lg">
            <button onClick={handleLogout} className="py-2 px-4 mr-4">
              <FaSignOutAlt />
            </button>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        ) : (
          <Link to="/auth">
            <FaUser />
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;


import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.png";
import image3 from "../assets/slider1.png";
import image4 from "../assets/slider2.png";
import image5 from "../assets/slider1.png";

const photos = [
  {
    id: 1,
    image: image1,
    title: "Discover Paradise...",
    subtitle: "Your Gateway to Dreams...",
    text: "Explore dreamy destinations. Your next adventure awaits!",
  },
  {
    id: 2,
    image: image2,
    title: "Journey to Serenity...",
    subtitle: "Where Tranquility Beckons...",
    text: "Seek tranquil landscapes. Find peace in beauty.",
  },
  {
    id: 3,
    image: image3,
    title: "Explore the Extraordinary...",
    subtitle: "Curated Adventures Await...",
    text: "Experience curated travel. Every moment is a gem.",
  },
  {
    id: 4,
    image: image4,
    title: "Wanderlust Unleashed..",
    subtitle: "Embark on Your Story...",
    text: "Unleash your wanderlust. Every journey is a story.",
  },
  {
    id: 5,
    image: image5,
    title: "Escape to Bliss...",
    subtitle: "Discover Blissful Moments...",
    text: "Find blissful moments. Make travel memories.",
  },
  // Add more photos as needed
];

const settings = {
  //   dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 2000,
};

const HomeScreen = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className="relative w-full h-full">
              <div className="w-full h-[100vh] relative">
                <img
                  src={photo.image}
                  width={1200}
                  height={700}
                  alt={Image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              </div>
              <div className="w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="cedarville-cursive-regular text-lg lg:text-3xl text-[#EFC03E] font-cursive font-semibold mb-4">
                  {photo.title}
                </h2>
                <h1 className="text-3xl lg:text-6xl font-bold mb-5">
                  {photo.subtitle}
                </h1>
                <p className="text-lg">{photo.text}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeScreen;

