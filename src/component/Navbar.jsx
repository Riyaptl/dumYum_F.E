import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
// import logo from '../assets/Logo2.png';
import logo from '../assets/final-02.png'

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
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  const jsonData = {
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '#', isMegaMenu: true },
      { title: 'About', url: '/' },
      { title: 'B2B Connect', url: '/b2b' },
    ],
    megaMenu: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      types: [{ title: 'Collections' }, { title: 'Our Specials' }],
    },
    feedback: {
      imageUrl:
        'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      story: `For the past 5 to 6 years, I've been crafting chocolates,using my friends and family as taste-testers.Their enthusiastic feedback pushed me to refine flavors and turn my passion into a business. Inspired by my grandmother's spirit and supported by my family, especially my husband, I embarked on my journey as a chocolatier, naming my creations "DumYum" in honor of my grandmother - "Mrs.Damyanti Joshi". My hope is that everyone who tries my chocolates enjoys the taste and emotions of hand making in every bite..`,
    },
    offer: {
      message:
        'Special Offers: Get 20% off on selected items. Limited time only!',
    },
  }

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSpecials())
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const handleResize = () => {
    setShowMenu(false)
    setShowProductsDropdown(false)
    setShowMeetTheMasterDropdown(false)
  }

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/')
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
    setShowProductsDropdown(false)
    setShowMeetTheMasterDropdown(false)
  }

  const handleProductsHover = () => {
    setShowProductsDropdown(true)
    setShowMeetTheMasterDropdown(false)
  }

  const handleMeetTheMasterHover = () => {
    setShowMeetTheMasterDropdown(true)
    setShowProductsDropdown(false)
  }

  const handleDropdownLeave = () => {
    setShowProductsDropdown(false)
    setShowMeetTheMasterDropdown(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50  ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      {!scrolled && (
        <div className="hidden sm:block bg-gray-100 text-black p-2 text-center">
          <p>{jsonData.offer.message}</p>
        </div>
      )}
      <div
        className={` relative wrapper bg-white text-black md:px-1   md:py-${
          scrolled ? '5' : '5'
        } flex justify-between items-center md:max-w-[92%] w-full mx-auto h-full`}
      >
        <div className="w-32  hidden lg:block">
          <Link to="/">
            <img src={logo} alt="logo" className="h-full" />
          </Link>
        </div>
        <div className="flex items-center pl-4">
          {showMenu ? (
            <FaTimes
              onClick={handleMenuClick}
              className="btn close-btn text-gray-700 text-xl lg:hidden"
            />
          ) : (
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
                  onMouseEnter={
                    menuItem.title === 'Products'
                      ? handleProductsHover
                      : menuItem.title === 'Meet the Master'
                      ? handleMeetTheMasterHover
                      : null
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  {menuItem.title}
                </Link>
                {menuItem.isMegaMenu && showProductsDropdown && (
                  <div
                    className="mega-box bg-white shadow-lg md:shadow-none absolute top-full left-0 right-0 md:transform md:translate-y-1/5 md:-translate-x-1/3 w-full lg:w-[60vw] mx-auto p-4 z-20"
                    onMouseEnter={handleProductsHover}
                    onMouseLeave={handleDropdownLeave}
                  >
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
                onClick={handleMeetTheMasterHover}
                className="text-black  py-2 px-4 block focus:outline-none"
                onMouseEnter={handleMeetTheMasterHover}
                onMouseLeave={handleDropdownLeave}
              >
                Meet the Master
              </button>
              {showMeetTheMasterDropdown && (
                <div
                  className="meet-chef-dropdown bg-white shadow-lg md:shadow-none absolute top-full md:right-14 md:transform md:translate-x-1/4 w-full lg:w-[60vw] mx-auto p-4 z-20"
                  onMouseEnter={handleMeetTheMasterHover}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="content flex flex-wrap justify-between flex-col sm:flex-row">
                    <div className="row lg:w-1/2 sm:w-1/3 hidden sm:block">
                      <img
                        src={jsonData.feedback.imageUrl}
                        alt=""
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="row md:w-1/2 w-full md:pl-4">
                      <p className="text-gray-900">{jsonData.feedback.story}</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="w-24 lg:hidden ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full" />
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="menu-right flex items-center text-black text-lg">
            <Link to="/cart" className="py-1 pr-1 md:pr-2">
              <FaShoppingCart />
            </Link>
            <Link to="/profile" className="py-1 px-1 md:px-2">
              <FaUser />
            </Link>
            <button onClick={handleLogout} className="py-1 px-1 md:px-2">
              <FaSignOutAlt />
              {/* LogOut */}
            </button>
          </div>
        ) : (
          <div className="menu-right flex items-center text-black text-lg">
            <Link to="/cart" className=" ">
              <FaShoppingCart />
            </Link>

            <Link to="/auth" className="md:py-1 md:px-2 ">
              <FaUser />
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
