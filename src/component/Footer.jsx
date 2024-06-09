import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

const Footer = () => {
  const footerData = {
    socialLinks: [
      { icon: FaFacebookF, url: '#' },
      { icon: FaTwitter, url: '#' },
      { icon: FaGooglePlusG, url: '#' },
    ],
    sections: [
      {
        title: 'Support',
        links: [
          ["FAQ's", '/faq'],
          ['Privacy Policy', '/policy'],
          ['Shipping Policy', '/shipping-policy'],
          ['Refund/Return Policy', '/refund-policy'],
          ['Terms And Conditions', '/t&c'],
          ['My Account', '/profile'],
          ['My Orders', '/profile'],
        ],
      },
      {
        title: 'Explore Us',
        links: [['About', '#'], ['Meet the Pioneers', '#']],
      },
      {
        title: 'Quick Links',
        links: [['All Products', '#'], ['B2B Connect', '/b2b'], ['Blogs', '#'], ['Contact Us', '#']],
      },
    ],
    copyrightText: 'Copyright ©dumYum, All Right Reserved',
    copyrightLink: '',
  }

  return (
    <footer className="bg-white text-gray-800 py-8 ">
      <div className="container mx-auto lg:px-8 max-w-[1800px]">
        <div className="flex justify-between md: max-w-[92%] mx-auto m-auto flex-col  md:flex md:flex-row sm:grid sm:grid-cols-2">
          {footerData.sections.map((section, index) => (
            <div key={index} className="py-4">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link[1]} className="text-gray-500 hover:text-gray-900">
                      {link[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="py-4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <social.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" border-t py-4 mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-center text-gray-500">
            {footerData.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
