import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/slider1.png";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import image2 from "../assets/slider2.png";

const productsData = [
  {
    "id": 1,
    "name": "Chocolate Bar",
    "description": "Delicious milk chocolate bar.",
    "price": "$5",
    "image": "https://entisi.com/cdn/shop/files/Classic25bonbonLarge_2048x2048.jpg?v=1696596426",
  },
  {
    "id": 2,
    "name": "Dark Chocolate",
    "description": "Rich dark chocolate for connoisseurs.",
    "price": "$6",
    "image": "https://entisi.com/cdn/shop/files/CreminoBoxof15-Open_2048x2048.png?v=1698686463",
  },
  {
    "id": 3,
    "name": "Hazelnut Praline",
    "description": "Crunchy hazelnut praline covered in smooth milk chocolate.",
    "price": "$7",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00733_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  },
  {
    "id": 4,
    "name": "White Chocolate Bar",
    "description": "Creamy white chocolate bar for a sweet treat.",
    "price": "$4",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00729_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  },
  {
    "id": 5,
    "name": "Caramel Filled Chocolate",
    "description": "Indulgent chocolate filled with gooey caramel.",
    "price": "$6",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00737_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  },
  {
    "id": 6,
    "name": "Mint Chocolate",
    "description": "Refreshing mint chocolate with a smooth texture.",
    "price": "$5",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00741_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  },
  {
    "id": 7,
    "name": "Almond Crunch",
    "description": "Crunchy almond bits embedded in rich dark chocolate.",
    "price": "$7",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00735_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  },
  {
    "id": 8,
    "name": "Fruit & Nut Chocolate",
    "description": "A delightful mix of dried fruits and nuts encased in creamy milk chocolate.",
    "price": "$8",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00733_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",

  },
  {
    "id": 9,
    "name": "Sea Salt Caramel Chocolate",
    "description": "Sweet and salty caramel chocolate for the perfect balance of flavors.",
    "price": "$7",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00729_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  },
  {
    "id": 10,
    "name": "Toffee Crunch",
    "description": "Buttery toffee bits combined with smooth milk chocolate.",
    "price": "$6",
    "image": "https://www.lindt.co.za/media/catalog/product/l/i/lindt_-_00737_copy.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  }
];

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
  const [showOverlay, setShowOverlay] = useState(false)
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    city: '',
    pincode: '',
    state: ''
  });
  const [err, setErr] = useState(null)
  const [subCategories, setSubCategories] = useState([])
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()
  const page = location.search.split('=')[1]
  const {singleCategory} = useSelector((state) => state.category)
  const {singleSpecial} = useSelector((state) => state.special)
  const {cartProducts, error} = useSelector((state) => state.cart)
  const subCategoryImages = "https://dumyum.onrender.com/uploads/subCategory/"

  // useEffect(() => {
  //   dispatch(getCartProducts())
  // }, [])

  useEffect(() => {
    if (page === "category"){
      setSubCategories(singleCategory?.subCategories)
    }else if (page === "special"){
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

  const handleShop = (id) =>{
    navigate(`/product/${id}`)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-[80%] m-auto"
    >
      {subCategories?.map(product => (
        <motion.div
          key={product._id}
          variants={productVariant}
          whileTap={{ scale: 0.95 }}
          className="bg-white  overflow-hidden flex flex-col justify-between"
        >
          {product.smallImages.length > 0 ?
              <motion.img
              onClick={() => handleShop(product._id)}
              src={subCategoryImages+product.smallImages[0]}
              alt={product.name}
              className="w-full  object-cover transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              /> 
              :
              <motion.img
              onClick={() => handleShop(product._id)}
              src={image1}
              alt={product.name}
              className="w-full  object-cover transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              />
          }
          <div className="p-4 text-center">
            <h2 className="text-xl font-serif">{product.name}</h2>
            <p className="text-gray-800 font-bold">{product.finalPrice}</p>
            
            {/* <button
                className="mt-2 px-4 py-2 border border-separate text-black  :border hover:border-black"
                onClick={() => handleAddToCart(product._id)}
              >
                Add to Cart
              </button> */}
            {/* { hasProduct(product._id) ? (
              <div className="mt-2 border border-separate text-black ">
                <button
                  className="px-4 py-2 "
                  onClick={() => handleDecrement(product._id)}
                >
                  -
                </button>
                <span className="px-4 py-2">{hasProduct(product._id).quantity}</span>
                <button
                  className="px-4 py-2 "
                  onClick={() => handleIncrement(product._id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="mt-2 px-4 py-2 border border-separate text-black  :border hover:border-black"
                onClick={() => handleAddToCart(product._id)}
              >
                Add to Cart
              </button>
            )} */}
          </div>
        </motion.div>
      ))}
      
    </motion.div>
  );
}

export default Products;
