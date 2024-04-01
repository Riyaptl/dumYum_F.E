import React from 'react';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
  const footerData = {
    logo: 'https://i.ibb.co/QDy827D/ak-logo.png',
    address: '1010 Avenue, sw 54321, chandigarh',
    phoneNumber: '9876543210',
    email: 'mail@info.com',
    socialLinks: [
      { icon: FaFacebookF, url: '#' },
      { icon: FaTwitter, url: '#' },
      { icon: FaGooglePlusG, url: '#' }
    ],
    Support: [
      'Deliveries ', 'Orders', 'Career', 'Refunds and Return' ,'Features', 
    ],
    Information: [
      'Deliveries ', 'Orders', 'Career', 'Refunds and Return',  
    ],
    Help: [ 
      'TERMS ', 'FAQS', 'CONTACT US', 'SPEAK UP ABOUT YOUR CONCERN', 
    ],
    copyrightText: 'Copyright © 2018, All Right Reserved',
    copyrightLink: 'https://codepen.io/anupkumar92/'
  };

  return (
    <footer className="relative bg-white text-black py-5">
      <div className="container mx-auto">

          <div className='flex justify-between flex-wrap max-w-[85%] m-auto'>
          {/* <div className='grid grid-cols-1 md:grid-cols-4 max-w-[85%] m-auto'> */}
           
            <div className="footer-widget">
              <div className="my-6">
                <h3 className="text-black font-semibold">SUPPORT</h3>
              </div>
              <ul className=''>
                {footerData.Support.map((link, index) => (
                  <li key={index}><a href="#" className="text-gray-400 hover:text-black">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-widget mx-auto">
              <div className="my-6">
                <h3 className="text-black font-semibold">INFORMATION</h3>
              </div>
              <ul className=''>
                {footerData.Information.map((link, index) => (
                  <li key={index}><a href="#" className="text-gray-400 hover:text-black">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-widget mx-auto">
              <div className="my-6">
                <h3 className="text-black font-semibold">HELP</h3>
              </div>
              <ul className=''>
                {footerData.Help.map((link, index) => (
                  <li key={index}><a href="#" className="text-gray-400 hover:text-black">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="relative z-[2]">
              {/* <div className="mb-6">
                logo
              
              </div> */}
              {/* <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit, Lorem ipsum dolor sit amet.</p> */}
              <div className="my-6">
                <span className="font-semibold text-black block mb-2">Follow us</span>
                {footerData.socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="text-black mr-3">
                    {<social.icon className="facebook-bg rounded-full p-2" />}
                  </a>
                ))}
              </div>
            </div> 
          </div>
        
      </div>

      <div className="text-black py-3 mt-8 border-t-[#37363647] border-t border-solid max-w-[85%] m-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-400">{footerData.copyrightText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
