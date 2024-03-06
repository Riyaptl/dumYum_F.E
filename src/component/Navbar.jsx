import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const jsonData = {
    logo: 'Logo',
    menuItems: [
      { title: 'Home', url: '#' },
      { title: 'About', url: '#' },
      { title: 'Dropdown Menu', url: '#', isDropdown: true },
      { title: 'Mega Menu', url: '#', isMegaMenu: true },

    ],
    dropdownItems: [
      { title: 'Drop menu 1', url: '#' },
      { title: 'Drop menu 2', url: '#' },
      { title: 'Drop menu 3', url: '#' },
      { title: 'Drop menu 4', url: '#' }
    ],
    megaMenu: {
      imageUrl: 'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      categories: [
        {
          title: 'Design Services',
          items: [
            { title: 'Graphics', url: '#' },
            { title: 'Vectors', url: '#' },
            { title: 'Business cards', url: '#' },
            { title: 'Custom logo', url: '#' }
          ]
        },
        {
          title: 'Email Services',
          items: [
            { title: 'Personal Email', url: '#' },
            { title: 'Business Email', url: '#' },
            { title: 'Mobile Email', url: '#' },
            { title: 'Web Marketing', url: '#' }
          ]
        },
        {
          title: 'Security services',
          items: [
            { title: 'Site Seal', url: '#' },
            { title: 'VPS Hosting', url: '#' },
            { title: 'Privacy Seal', url: '#' },
            { title: 'Website design', url: '#' }
          ]
        }
      ]
    },
    feedback: {
      imageUrl: 'https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg',
      story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  };

  return (
    <nav className="relative">
      <div className="wrapper">
        <div className="logo"><a href="#">{jsonData.logo}</a></div>
        <input type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon"><i className="fas fa-bars"></i></label>
        <input type="checkbox" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          {jsonData.menuItems.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.url}>{menuItem.title}</a>
              {menuItem.isDropdown && (
                <ul className="drop-menu">
                  {jsonData.dropdownItems.map((item, index) => (
                    <li key={index}><a href={item.url}>{item.title}</a></li>
                  ))}
                </ul>
              )}
              {menuItem.isMegaMenu && (
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <img src={jsonData.megaMenu.imageUrl} alt="" />
                    </div>
                    {jsonData.megaMenu.categories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="row">
                        <header>{category.title}</header>
                        <ul className="mega-links">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}><a href={item.url}>{item.title}</a></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <a href="#" className=''>Meet the Master</a>
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
      </div>
    </nav>
  );
};

export default Navbar;
