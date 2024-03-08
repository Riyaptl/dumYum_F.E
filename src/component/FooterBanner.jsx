import React from 'react';
import { useLocation } from 'react-router-dom';

function FooterBanner(props) {
  // const title = useLocation()

  return (
    <div className='relative w-full h-[50vh] '>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url(https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775)" }}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent chocolaty layer */}
      <div className='absolute inset-0 flex items-center justify-center text-white text-center'>
        <div>
          <div className='text-5xl font-bold pb-4'>Title</div>
          <div className='text-xl'>Title pathname</div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
