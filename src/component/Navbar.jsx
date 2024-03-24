import React, { useEffect } from 'react';
import './Navbar.css';
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {getCategories} from "../slices/categorySlice"
import { getSpecials } from '../slices/specialSlice';
import  {logOut}  from '../slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {categories} = useSelector((state) => state.category)
  const {specials} = useSelector((state) => state.special)
  const {isLoggedIn} = useSelector((state) => state.auth)

  const jsonData = {
    logo: 'Logo',
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '#', isMegaMenu: true },
      { title: 'About', url: '/' },
      { title: 'B2B Connect', url: '/' },
      { title: 'Policy', url: '/policy' },
      { title: 'Terms & Conditions', url: '/t&c' },
    ],
    megaMenu: {
      imageUrl: 'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      types: [
        {title: 'Collections'},
        {title: 'Our Specials'},
      ]
    },
    feedback: {
      imageUrl: 'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  };

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSpecials())
  }, [])

  const handleLogout = () => {
    dispatch(logOut())
    navigate("/")
  }

  return (
    <nav className="relative">
      <div className="wrapper">
        <div className="logo"><Link to="/">{jsonData.logo}</Link></div>
        <input type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon"><i className="fas fa-bars"></i></label>
        <input type="checkbox" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          
          
          {jsonData.menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link to={menuItem.url}>{menuItem.title}</Link>
              {menuItem.isMegaMenu && (
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <img src={jsonData.megaMenu.imageUrl} alt="" />
                    </div>
                    {jsonData.megaMenu.types.map((type, typeIndex) => (
                      <div key={typeIndex} className="row">
                        <header>{type.title}</header>
                        {type.title === "Collections" ? 
                          <ul className="mega-links">
                            {categories.map((item, itemIndex) => (
                              <li key={itemIndex}><Link to={`/${item._id}?page=category`}>{item.name}</Link></li>
                            ))}
                          </ul>
                          :
                          <ul className="mega-links">
                            {specials.map((item, itemIndex) => (
                              <li key={itemIndex}><Link to={`/${item._id}?page=special`}>{item.name}</Link></li>
                              ))}
                          </ul>
                          }
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <Link to="#" className=''>Meet the Master</Link>
            <div className="meet-chef-dropdown">
              <div className="content">
                <div className="row">
                  <img src={jsonData.feedback.imageUrl} alt="" />
                </div>
                <div className="row">
                  <p>{jsonData.feedback.story}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {isLoggedIn ?
        <>
          <button onClick={handleLogout}>Logout</button>
          <a href='/cart'>Cart</a>
        </>
        :
          <a href='/auth'>Login</a>
        }
      </div>
    </nav>
  );
};

export default Navbar;
