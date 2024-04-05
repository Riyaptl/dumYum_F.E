import React from "react";

const Tagline = ({ tagline }) => {
  return (
    // <div className="py-8 text-center items-center max-h-[40vh] h-full max-w-lg mx-auto my-auto">
    <div className="flex max-h-[35vh] h-full max-w-3xl mx-auto text-center justify-center align-middle flex-col ">
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
  );
};

export default Tagline;
