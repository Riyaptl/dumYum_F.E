import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/slider1.png';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const productVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Products = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [delayedSpecial, setDelayedSpecial] = useState(null);
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    city: '',
    pincode: '',
    state: '',
  });
  const [err, setErr] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const page = location.search.split('=')[1];
  const { singleCategory } = useSelector((state) => state.category);
  const { singleSpecial } = useSelector((state) => state.special);
  const { cartProducts, error } = useSelector((state) => state.cart);
  const subCategoryImages = 'http://localhost:8000/uploads/subCategory/';

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
    }, 300);
    return () => clearTimeout(timerId);
  };
  const handleNormal = () => {
    setDelayedSpecial(null);
  };

  return (
    <>
      {subCategories?.length>0 && 
      <>
        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap  p-4 w-[90%]"
          >
            {subCategories?.map((product, index) => (
              <motion.div
                key={product?._id || index}
                variants={productVariant}
                whileTap={{ scale: 0.95 }}
                className="bg-white overflow-hidden flex flex-col justify-between shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] mx-2 mb-4 "
                onMouseEnter={() => handleHover(product)}
                onMouseLeave={handleNormal}
                style={{ flex: '0 0 22.5%', maxWidth: '22.5%' }}
              >
                {product && (
                  <>
                    <motion.img
                      onClick={() => handleShop(product._id)}
                      src={
                        delayedSpecial === product && product.smallImages.length > 0
                          ? subCategoryImages + product.smallImages[1]
                          : product.smallImages.length > 0
                          ? subCategoryImages + product.smallImages[0]
                          : image1 // Use image1 if no images available
                      }
                      alt={product.name}
                      className="w-full h-72 object-cover transition-transform duration-700 transform hover:scale-105"
                      style={{
                        transitionDelay: '0s',
                        transform: delayedSpecial === product ? 'scale(1)' : 'scale(0.9)',
                      }}
                    />
                    <div className="p-4 text-center">
                      <h2 className="text-xl font-serif">{product?.name.split('|')[0]}</h2>
                      <p className="text-gray-800 font-bold">{product?.quantity}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </>
      }
    </>
  );
};

export default Products;
