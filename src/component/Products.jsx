import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/slider1.png'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import image2 from '../assets/slider2.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const productVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Products = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [delayedSpecial, setDelayedSpecial] = useState(null)
  const [hoveredSpecial, setHoveredSpecial] = useState(null)
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    city: '',
    pincode: '',
    state: '',
  })
  const [err, setErr] = useState(null)
  const [subCategories, setSubCategories] = useState([])
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const page = location.search.split('=')[1]
  const { singleCategory } = useSelector((state) => state.category)
  const { singleSpecial } = useSelector((state) => state.special)
  const { cartProducts, error } = useSelector((state) => state.cart)
  const subCategoryImages = 'http://localhost:8000/uploads/subCategory/'

  // useEffect(() => {
  //   dispatch(getCartProducts())
  // }, [])

  useEffect(() => {
    if (page === 'category') {
      setSubCategories(singleCategory?.subCategories)
    } else if (page === 'special') {
      setSubCategories(singleSpecial?.subCategories)
    }
  }, [singleCategory, singleSpecial, page])

  // useEffect(() => {
  //   setErr(err)
  //   console.log(error);
  //   if (error === "Address detail is required"){
  //     setShowOverlay(true)
  //   }
  // }, [error])

  // const handleAddToCart = async (productId) => {
  //   await dispatch(addCart(productId));
  //   // await dispatch(getCartProducts());
  // };

  // const handleIncrement = async (productId) => {
  //   await dispatch(addQuantity(productId));
  //   await dispatch(getCartProducts());
  // };

  // const handleDecrement = async (productId) => {
  //   await dispatch(removeQuantity(productId));
  //   await dispatch(getCartProducts());
  // };

  // const hasProduct = (id) => {
  //   const subCat = cartProducts.find((obj) => obj.subCategoryId == id)
  //   return subCat
  // }

  // const handleSubmitAddress = async () => {
  //   // await dispatch();
  //   setShowOverlay(false);
  // };

  const handleShop = (id) => {
    navigate(`/product/${id}`)
  }
  const handleHover = (product) => {
    setHoveredSpecial(product)
    const timerId = setTimeout(() => {
      setDelayedSpecial(product)
    }, 300)
    return () => clearTimeout(timerId)
  }
  const handleNormal = () => {
    setHoveredSpecial(null)
    setDelayedSpecial(null)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-[90%] m-auto"
    >
      {subCategories?.map((product) => (
        <motion.div
          key={product._id}
          variants={productVariant}
          whileTap={{ scale: 0.95 }}
          className="bg-white  overflow-hidden flex flex-col justify-between  shadow-[0_2px_1px_0_rgba(0,0,0,0.1)]"
          onMouseEnter={() => handleHover(product)}
          onMouseLeave={handleNormal}
        >
          {product.smallImages.length > 0 ? (
            <motion.img
              onClick={() => handleShop(product._id)}
              src={
                delayedSpecial === product && product.smallImages.length > 0
                  ? subCategoryImages + product.smallImages[1]
                  : product.smallImages.length > 0
                  ? subCategoryImages + product.smallImages[0]
                  : subCategoryImages + product.smallImages[1]
              }
              alt={product.name}
              className="w-full h-72 object-cover transition-transform duration-700 transform hover:scale-105  "
              style={{
                transitionDelay: '0s',
                transform:
                  delayedSpecial === product ? 'scale(1)' : 'scale(0.9)',
              }}
            />
          ) : (
            <motion.img
              onClick={() => handleShop(product._id)}
              src={image1}
              alt={product.name}
              className="w-full  object-cover transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
          )}
          <div className="p-4 text-center">
            <h2 className="text-xl font-serif">{product?.name.split('|')[0]}</h2>
            <p className="text-gray-800 font-bold">{product?.quantity}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Products
