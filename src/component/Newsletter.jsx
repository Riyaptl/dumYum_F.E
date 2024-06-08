import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { newsletter } from '../slices/inquirySlice';

const Newsletter = () => {
  const controls = useAnimation();
  const [email, setEmail] = useState('')
  const { ref, inView } = useInView({ triggerOnce: true });
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.inquiry)

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newsletter(email))
    
  }

  return (
    <div
      className="font-sans relative w-full h-[50vh] flex justify-center items-center bg-gray-100"
    >
      <div className="w-full max-w-[640px] mx-5">
        <h1 className="text-center text-5xl font-bold font-serif">Newsletter.</h1>
        <p className="text-center mt-2">Stay up to date with our latest news and products</p>
        <form method="post" className="relative flex items-center my-10" onSubmit={handleSubmit}>
          <input type="email" name="email" id="email" placeholder="your@email.com" className="w-full bg-transparent py-3 pl-5 pr-20 border-2 border-solid border-black rounded-0 outline-none placeholder-text-black/50" required onChange={handleEmail}/>
          <button type="submit" className="absolute h-full right-0 bg-black text-white px-5 flex items-center cursor-pointer hover:bg-black/80 disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={loading}>
            <p className="hidden sm:block">Subscribe</p>
            <i className="bx bx-chevron-right text-2xl block sm:hidden"></i>
          </button>
        </form>
        <p className="text-center">*your email is safe with us, we don't spam</p>
      </div>
    </div>
  );
};

export default Newsletter;
