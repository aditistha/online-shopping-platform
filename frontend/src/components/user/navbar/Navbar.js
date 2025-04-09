// components/Navbar.js
import React, { useState }from 'react';
import { Link } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
import './Navbar.css';
import { FiChevronDown } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };
  const categoryData = {
    mens: [
      { name: 'Shirts', path: '/mens/shirts' },
      { name: 'Pants', path: '/mens/pants' },
      { name: 'Jackets', path: '/mens/jackets' },
      { name: 'Accessories', path: '/mens/accessories' }
    ],
    womens: [
      { name: 'Dresses', path: '/womens/dresses' },
      { name: 'Tops', path: '/womens/tops' },
      { name: 'Jeans', path: '/womens/jeans' },
      { name: 'Jewelry', path: '/womens/jewelry' }
    ],
    kids: [
      { name: 'Boys', path: '/kids/boys' },
      { name: 'Girls', path: '/kids/girls' },
      { name: 'Baby', path: '/kids/baby' },
      { name: 'Toys', path: '/kids/toys' }
    ],
    shoes: [
      { name: 'Men Shoes', path: '/shoes/men' },
      { name: 'Women Shoes', path: '/shoes/women' },
      { name: 'Kids Shoes', path: '/shoes/kids' },
      { name: 'Sports', path: '/shoes/sports' }
    ],
    accessories: [
      { name: 'Bags', path: '/accessories/bags' },
      { name: 'Watches', path: '/accessories/watches' },
      { name: 'Sunglasses', path: '/accessories/sunglasses' },
      { name: 'Belts', path: '/accessories/belts' }
    ]
  }; 
 
  return (
    <nav className="navbar">
      {/* Top Bar with Search */}
      <div className="top-bar">
        <form className="search-form">
          <input
            type="text"
            placeholder="Search for products..."
            
          />
          <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      {/* Logo */}
        <Link to="/" className="logo">ShopEasy</Link>
      <div className="nav-container">
        

        {/* Main Categories */}
        <div className="category-links">
          <Link to="/">Home</Link>
           {/* Men's Dropdown */}
           <div 
              className="dropdown-container"
              onMouseEnter={() => toggleDropdown('mens')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="dropdown-btn">
                Men's <FiChevronDown className={`dropdown-icon ${activeDropdown === 'mens' ? 'rotate' : ''}`} />
              </button>
              {activeDropdown === 'mens' && (
                <div className="dropdown-menu">
                  {categoryData.mens.map((item) => (
                    <Link key={item.path} to={item.path}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Women's Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => toggleDropdown('womens')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="dropdown-btn">
                Women's <FiChevronDown className={`dropdown-icon ${activeDropdown === 'womens' ? 'rotate' : ''}`} />
              </button>
              {activeDropdown === 'womens' && (
                <div className="dropdown-menu">
                  {categoryData.womens.map((item) => (
                    <Link key={item.path} to={item.path}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Kids Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => toggleDropdown('kids')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="dropdown-btn">
                Kid's <FiChevronDown className={`dropdown-icon ${activeDropdown === 'kids' ? 'rotate' : ''}`} />
              </button>
              {activeDropdown === 'kids' && (
                <div className="dropdown-menu">
                  {categoryData.kids.map((item) => (
                    <Link key={item.path} to={item.path}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Shoes Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => toggleDropdown('shoes')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="dropdown-btn">
                Shoes <FiChevronDown className={`dropdown-icon ${activeDropdown === 'shoes' ? 'rotate' : ''}`} />
              </button>
              {activeDropdown === 'shoes' && (
                <div className="dropdown-menu">
                  {categoryData.shoes.map((item) => (
                    <Link key={item.path} to={item.path}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accessories Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => toggleDropdown('accessories')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button className="dropdown-btn">
                Accessories <FiChevronDown className={`dropdown-icon ${activeDropdown === 'accessories' ? 'rotate' : ''}`} />
              </button>
              {activeDropdown === 'accessories' && (
                <div className="dropdown-menu">
                  {categoryData.accessories.map((item) => (
                    <Link key={item.path} to={item.path}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>
        </div>

        {/* Cart/User Icons */}
        <div className="nav-actions">
        <Link  className="cart-icon">
              <FontAwesomeIcon icon={faCartShopping} />
              
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;