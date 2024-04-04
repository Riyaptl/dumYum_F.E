import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../slices/categorySlice'
import { getSpecials } from '../slices/specialSlice'
import { logOut } from '../slices/authSlice'
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
} from 'react-icons/fa'
import logo from '../assets/Logo.jpg'

const Navbar = () => {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)
  const { specials } = useSelector((state) => state.special)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [showMenu, setShowMenu] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showMeetTheMasterDropdown, setShowMeetTheMasterDropdown] = useState(
    false,
  )

  const jsonData = {
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '#', isMegaMenu: true },
      { title: 'About', url: '/' },
      { title: 'B2B Connect', url: '/' },
    ],
    megaMenu: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      types: [{ title: 'Collections' }, { title: 'Our Specials' }],
    },
    feedback: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    offer: {
      message:
        'Special Offers: Get 20% off on selected items. Limited time only!',
    },
  }

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSpecials())
  }, [])

  const handleLogout = () => {
    dispatch(logOut())
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
    setShowProductsDropdown(false)
    setShowMeetTheMasterDropdown(false)
  }

  const handleProductsClick = () => {
    setShowProductsDropdown(!showProductsDropdown)
    setShowMeetTheMasterDropdown(false)
  }

  const handleMeetTheMasterClick = () => {
    setShowMeetTheMasterDropdown(!showMeetTheMasterDropdown)
    setShowProductsDropdown(false)
  }

  return (
    <nav className="relative z-10">
      <div className="offer-bar bg-gray-100 text-black p-2 text-center">
        <p>{jsonData.offer.message}</p>
      </div>
      <div className="wrapper bg-white text-black px-4 py-2 flex justify-between items-center max-w-[90%] w-full mx-auto max-h-[20vh] h-full">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 md:h-16" />
          </Link>
        </div>
        <div className="flex items-center">
          {showMenu && (
            <FaTimes
              onClick={handleMenuClick}
              className="btn close-btn text-gray-700 text-xl lg:hidden"
            />
          )}
          {!showMenu && (
            <FaBars
              onClick={handleMenuClick}
              className="menu-icon cursor-pointer lg:hidden text-gray-700 text-xl"
            />
          )}
          <ul
            className={
              showMenu
                ? 'nav-links absolute top-full left-0 w-full bg-white p-4'
                : 'nav-links hidden lg:flex'
            }
          >
            {jsonData.menuItems.map((menuItem, index) => (
              <li key={index} className="relative">
                <Link
                  to={menuItem.url}
                  className="text-text-black  py-2 px-4 block"
                  onClick={
                    menuItem.title === 'Products' ? handleProductsClick : null
                  }
                  onMouseEnter={
                    menuItem.title === 'Products' ? handleProductsClick : null
                  }
                  onMouseLeave={
                    menuItem.title === 'Products' ? handleProductsClick : null
                  }
                >
                  {menuItem.title}
                </Link>
                {menuItem.isMegaMenu && showProductsDropdown && (
                  <div className="mega-box bg-white shadow-lg md:shadow-none absolute top-full left-0 self-center w-full h-[35vh] lg:w-[40vw] p-4 z-20">
                    <div className="content flex flex-row">
                      <div className="hidden md:block md:w-1/2">
                        <img
                          src={jsonData.megaMenu.imageUrl}
                          alt="Mega Menu Image"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="row w-full lg:w-1/2 flex justify-evenly ml-4">
                        <div className="">
                          <ul className="mega-links">
                            <header className="text-lg font-semibold mb-2">
                              {jsonData.megaMenu.types[0].title}
                            </header>
                            {categories.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={`/${item._id}?page=category`}
                                  className="text-gray-900 py-1 block"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="">
                          <ul className="mega-links">
                            <header className="text-lg font-semibold mb-2">
                              {jsonData.megaMenu.types[1].title}
                            </header>
                            {specials.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  to={`/${item._id}?page=special`}
                                  className="text-gray-900 hover:text-gray-500 py-1 block"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li className="relative">
              <button
                onClick={handleMeetTheMasterClick}
                className="text-black  py-2 px-4 block focus:outline-none"
                onMouseEnter={handleMeetTheMasterClick}
                onMouseLeave={handleMeetTheMasterClick}
              >
                Meet the Master
              </button>
              {showMeetTheMasterDropdown && (
                <div className="meet-chef-dropdown bg-white shadow-lg md:shadow-none absolute top-full right-0 w-full h-[70vh] lg:w-[40vw] md:h-[35vh] p-4 z-20">
                  <div className="content flex flex-wrap justify-between flex-col sm:flex-row">
                    <div className="row lg:w-1/2 sm:w-1/3 w-full">
                      <img
                        src={jsonData.feedback.imageUrl}
                        alt=""
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="row md:w-1/2 w-full  md:pl-4">
                      <p className="text-gray-900">{jsonData.feedback.story}</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="menu-right flex items-center text-black text-lg">
            <button onClick={handleLogout} className="  py-2 px-4 mr-4">
              <FaSignOutAlt />
            </button>
            <Link to="/cart" className=" ">
              <FaShoppingCart />
            </Link>
          </div>
        ) : (
          <Link to="/auth" className=" ">
            <FaUser />
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
