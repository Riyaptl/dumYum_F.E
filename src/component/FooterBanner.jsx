import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSingleCategory } from '../slices/categorySlice';
import { getSingleSpecial } from '../slices/specialSlice';
import { useDispatch, useSelector } from 'react-redux';

function FooterBanner(props) {
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch();
  const location = useLocation()
  const id = location.pathname.split('/')[1]
  const page = location.search.split('=')[1]
  const {singleCategory} = useSelector((state) => state.category)
  const {singleSpecial} = useSelector((state) => state.special)
  const pageImages = `http://localhost:8000/uploads/${page}/`
  // console.log(id, page);

  useEffect(() => {
    if (page === "category"){
      dispatch(getSingleCategory(id))
    }else if (page === "special"){
      dispatch(getSingleSpecial(id))
    }
  }, [id, dispatch, page])

  useEffect(() => {
    if (page === "category") {
      setProduct(singleCategory);
    } else if (page === "special") {
      setProduct(singleSpecial);
    }
  }, [singleCategory, singleSpecial, page])

  return (
    <>
    <div className='relative w-full h-[40vh] max-w-[2000px] m-auto max-h-[303px]'>
      {product?.images.length > 0 ? 
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${pageImages+product.images[0]})` }}
        />
      :
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url(https://lepure.in/cdn/shop/products/re-min_460x.jpg?v=1664703775)" }}
        />
      }

      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent chocolaty layer */}
      <div className='absolute inset-0 flex items-center justify-center text-white text-center'>
        <div>
          <div className='text-5xl font-bold pb-4'>{product?.name}</div>
          <div className='text-xl'>{product?.tagline}</div>
          <div className='text-xl'>{product?.description}</div>
        </div>
      </div>
    </div> 
  </>
  );
}

export default FooterBanner;
