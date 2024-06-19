import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../slices/categorySlice'
import { getSpecials } from '../slices/specialSlice'
import { logOut } from '../slices/authSlice'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
} from 'react-icons/fa'
import '../pages/Navbar.scss'
import svgLogo from '../assets/Logo.png'
// import LogoSvg from './LogoSvg'
import { IoIosArrowDown } from 'react-icons/io'
import { MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { categories } = useSelector((state) => state.category)
  const { specials } = useSelector((state) => state.special)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuTitle, setMenuTitle] = useState('')

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
    setActiveSubMenu(null)
  }

  const showSubMenu = (title, index) => {
    setActiveSubMenu(index)
    setMenuTitle(title)
  }

  const hideSubMenu = () => {
    setActiveSubMenu(null)
    setMenuTitle('')
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuActive) {
        toggleMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuActive])

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSpecials())
  }, [])

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div
      className={`sticky top-0 left-0 w-full bg-white shadow-md z-50 py-4  mx-auto  ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div
        className={` relative wrapper bg-white text-black md:px-1 md:py-${
          scrolled ? '5' : '5'
        } flex justify-between items-center md:w-[92%] w-full mx-auto h-full  max-w-[1800px] `}
      >
        <header className="header" id="header">
          <nav className="navbar container">
            <section className="navbar__left">
              <Link to="/" className="brand">
                {/* <LogoSvg /> */}
                <img src={svgLogo} alt="DumYum" className="logo"  />
              </Link>
              <div className="burger" id="burger" onClick={toggleMenu}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </div>
            </section>
            <section className="navbar__center">
              <span
                className={`overlay ${isMenuActive ? 'is-active' : ''}`}
                onClick={toggleMenu}
              ></span>
              <div
                className={`menu ${isMenuActive ? 'is-active' : ''}`}
                id="menu"
              >
                <div
                  className={`menu__header ${
                    activeSubMenu !== null ? 'is-active' : ''
                  }`}
                >
                  <span className="menu__arrow" onClick={hideSubMenu}>
                    <TiArrowLeftThick />
                  </span>
                  <span className="menu__title">{menuTitle}</span>
                </div>
                <ul className="menu__inner">
                  <li className="menu__item">
                    <Link to="/" className="menu__link">
                      Home
                    </Link>
                  </li>
                  <li className="menu__item menu__dropdown">
                    <a
                      href="#"
                      className="menu__link"
                      onClick={() => showSubMenu('Products', 0)}
                    >
                      Products
                      <i>
                        <MdArrowDropDown />
                      </i>
                    </a>
                    <div
                      className={`submenu megamenu__text ${
                        activeSubMenu === 0 ? 'is-active' : ''
                      }`}
                    >
                      <div className="submenu_inner_image ">
                        <img
                          src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                          alt="Products image"
                          className="Product_image"
                        />
                      </div>
                      <div className="submenu__inner collection">
                        <h4 className="submenu__title">Collections</h4>
                        <ul className="submenu__list">
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
                      <div className="submenu__inner specials">
                        <h4 className="submenu__title">Our Specials</h4>
                        <ul className="submenu__list">
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
                  </li>
                  <li className="menu__item">
                    <Link to="/about" className="menu__link">
                      About
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/b2b" className="menu__link">
                      B2B Connect
                    </Link>
                  </li>

                  <li className="menu__item menu__dropdown">
                    <a
                      href="#"
                      className="menu__link"
                      onClick={() => showSubMenu('Meet the Master', 1)}
                    >
                      Meet the Master
                      <i>
                        <MdArrowDropDown />
                      </i>
                    </a>
                    <div
                      className={`submenu megamenu__image ${
                        activeSubMenu === 1 ? 'is-active' : ''
                      }`}
                    >
                      <div className="submenu__inner meet-master">
                        <a href="#">
                          <img
                            src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                            className="submenu-image"
                            alt="meet the master "
                          />
                          <span className="submenu__title story-text">
                            For the past 5 to 6 years, I've been crafting
                            chocolates, using my friends and family as
                            taste-testers.Their enthusiastic feedback pushed me
                            to refine flavors and turn my passion into a
                            business. Inspired by my grandmother's spirit and
                            supported by my family, especially my husband, I
                            embarked on my journey as a chocolatier, naming my
                            creations "DumYum" in honor of my grandmother -
                            "Mrs.Damyanti Joshi". My hope is that everyone who
                            tries my chocolates enjoys the taste and emotions of
                            hand making in every bite..
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu__item menu__dropdown">
                    <a
                      href="#"
                      className="menu__link"
                      onClick={() => showSubMenu('Account', 2)}
                    >
                      Account
                      <i>
                        <MdArrowDropDown />
                      </i>
                    </a>
                    <div
                      className={`submenu megamenu__normal ${
                        activeSubMenu === 2 ? 'is-active' : ''
                      }`}
                    >
                      <ul className="submenu__list">
                        {isLoggedIn ? (
                          // If logged in, render profile and logout
                          <>
                            <li>
                              <a href="/profile">Profile</a>
                            </li>
                            <li>
                              <a href="/logout" onClick={handleLogout}>
                                Logout
                              </a>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <a href="/auth">Login</a>
                            </li>
                            <li>
                              <a href="#">Register</a>
                            </li>
                          </>
                        )}
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="navbar__right">
              {isLoggedIn ? (
                <div className="menu-right">
                  <Link to="/cart" className="Cart">
                    <FaShoppingCart />
                  </Link>
                  <Link to="/profile" className="profile">
                    <FaUser />
                  </Link>
                  <button onClick={handleLogout} className="signOut">
                    <FaSignOutAlt />
                  </button>
                </div>
              ) : (
                <div className="menu-right">
                  <Link to="/cart" className="Cart">
                    <FaShoppingCart />
                  </Link>
                  <Link to="/auth" className="signIn">
                    <FaSignInAlt />
                  </Link>
                </div>
              )}
            </section>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar
