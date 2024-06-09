import React, { useEffect, useState } from 'react';
import image1 from '../assets/slider1.png';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const [delayedSpecial, setDelayedSpecial] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const page = location.search.split('=')[1];
  const { singleCategory } = useSelector((state) => state.category);
  const { singleSpecial } = useSelector((state) => state.special);
  const subCategoryImages = `${import.meta.env.VITE_APP_SUBCAT_URL}`;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);

  useEffect(() => {
    if (page === 'category') {
      setSubCategories(singleCategory?.subCategories);
    } else if (page === 'special') {
      setSubCategories(singleSpecial?.subCategories);
    }
  }, [singleCategory, singleSpecial, page]);

  const handleShop = (id) => {
    navigate(`/product/${id}`);
  };

  const handleHover = (product) => {
    const timerId = setTimeout(() => {
      setDelayedSpecial(product);
    }, 400);
    return () => clearTimeout(timerId);
  };

  const handleNormal = () => {
    setDelayedSpecial(null);
  };

  return (
    <>
      {subCategories?.length > 0 && (
        <div className="flex justify-center max-w-[1800px] mx-auto">
          <div className="flex flex-wrap justify-center p-4 w-[100%]  ">
            {subCategories?.map((product, index) => (
              <div
                key={product?._id || index}
                className="bg-white overflow-hidden relative flex flex-col justify-center shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] mx-2 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2  cursor-pointer "
                onMouseEnter={() => handleHover(product)}
                onMouseLeave={handleNormal}
              >
                {product && (
                  <>
                  <div className='class="w-full px-2 mb-4 relative overflow-hidden cursor-pointer'>
                    <img
                      onClick={() => handleShop(product._id)}
                      src={
                        delayedSpecial === product && product.smallImages.length > 0
                          ? subCategoryImages + product.smallImages[1]
                          : product.smallImages.length > 0
                          ? "http://localhost:8000/uploads/special/DSC_0447.jpg"
                          : image1 
                      }
                      alt={product.name}
                      className="w-full h-60 object-cover transition-transform duration-700 transform hover:scale-105" 
                      style={{
                        transitionDelay: '0s',
                        transform: delayedSpecial === product ? 'scale(1.1)' : 'scale(1)',

                      }}
                    />
                    </div>
                    <div className="p-4 text-center">
                      <h2 className="text-xl font-serif">{product?.name.split('|')[0]}</h2>
                      <p className="text-gray-800 font-bold">{product?.quantity}</p>
                      <p className="text-gray-800 font-bold">Rs. {product?.finalPrice}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
