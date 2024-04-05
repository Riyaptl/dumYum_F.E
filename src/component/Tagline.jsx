import React from "react";
import { motion } from "framer-motion";

const Tagline = ({ tagline }) => {
  return (
    <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <div className="flex  h-full max-w-3xl mx-auto text-center justify-center align-middle flex-col ">
      <hr className=" border-double  mb-4 w-16 mx-auto" /> 
      <p className="text-xl font-medium  text-black">
        {tagline.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <hr className="border-gray-800 mt-4 w-16 mx-auto" /> 
    </div>
    </motion.div>
  );
};

export default Tagline;
