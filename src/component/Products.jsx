import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/slider1.png";
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
  const [cart, setCart] = useState({});

  const handleAddToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleIncrement = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: Math.max(0, (prevCart[productId] || 0) - 1),
    }));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-[80%] m-auto"
    >
      {productsData.map(product => (
        <motion.div
          key={product.id}
          variants={productVariant}
          whileTap={{ scale: 0.95 }}
          className="bg-white  overflow-hidden flex flex-col justify-between"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full  object-cover transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          <div className="p-4 text-center">
            <h2 className="text-xl font-serif">{product.name}</h2>
            <p className="text-gray-800 font-bold">{product.price}</p>
            {cart[product.id] ? (
              <div className="mt-2 border border-separate text-black ">
                <button
                  className="px-4 py-2 "
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4 py-2">{cart[product.id]}</span>
                <button
                  className="px-4 py-2 "
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="mt-2 px-4 py-2 border border-separate text-black  :border hover:border-black"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Products;
