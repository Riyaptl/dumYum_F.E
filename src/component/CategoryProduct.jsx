import React, { useState } from 'react';
import { motion } from 'framer-motion';


  const categoryData = [
    {
      "id": 1,
      "name": "Category 1",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/Singles-Cate-banner-416x416.png",
    },
    {
      "id": 2,
      "name": "Category 2",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/Stick-final-category-image-416x416.jpg",
    },
    {
      "id": 3,
      "name": "Category 3",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/LINDOR-truffles-324x324.jpg",
    },
    {
      "id": 4,
      "name": "Category 4",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/Singles-Cate-banner-416x416.png",
    },
    {
      "id": 5,
      "name": "Category 5",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/Stick-final-category-image-416x416.jpg",
    },
    {
      "id": 6,
      "name": "Category 6",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/LINDOR-truffles-324x324.jpg",
    },
    {
      "id": 7,
      "name": "Category 4",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/Singles-Cate-banner-416x416.png",
    },
    {
      "id": 8,
      "name": "Category 5",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/Stick-final-category-image-416x416.jpg",
    },
    {
      "id": 9,
      "name": "Category 6",
      "image": "https://lindtonlineshop.co.za/wp-content/uploads/2020/09/LINDOR-truffles-324x324.jpg",
    },
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

const CategoryProduct = () => {
  const [selectedFilter, setSelectedFilter] = useState('default');
  const [cart, setCart] = useState({});

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleAddToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const sortedCategoryData = categoryData.slice().sort((a, b) => {
    switch (selectedFilter) {
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      case 'nameAZ':
        return a.name.localeCompare(b.name);
      case 'nameZA':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col items-start mx-auto max-w-[80%]">
      <div className="relative mt-4 mr-4">
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="appearance-none py-2 pl-4 pr-8 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
        >
          <option value="default">Sort by</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="nameAZ">Name: A to Z</option>
          <option value="nameZA">Name: Z to A</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full"
      >
        {sortedCategoryData.map((category) => (
          <motion.div
            key={category.id}
            variants={productVariant}
            className="bg-white overflow-hidden flex flex-col justify-between items-center"
          >
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-serif">{category.name}</h2>
              {cart[category.id] ? (
                <div className="mt-2 border border-separate text-black ">
                  <button
                    className="px-4 py-2 "
                    onClick={() =>
                      setCart((prevCart) => ({
                        ...prevCart,
                        [category.id]: prevCart[category.id] - 1,
                      }))
                    }
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{cart[category.id]}</span>
                  <button
                    className="px-4 py-2 "
                    onClick={() =>
                      setCart((prevCart) => ({
                        ...prevCart,
                        [category.id]: prevCart[category.id] + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="mt-2 px-4 py-2 border border-separate text-black hover:border hover:border-black"
                  onClick={() => handleAddToCart(category.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryProduct;
