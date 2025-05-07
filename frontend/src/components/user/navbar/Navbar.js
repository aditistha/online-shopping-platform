// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faUser,
  faChevronDown,
  faCartShopping,
  faMinus,
  faPlus,
  faTimes,
  faSignInAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { categoryData, categoryOrder } from '../../../data/categories';
import './Navbar.css';
import { useCart } from '../../../context/CartContext';

const Navbar = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };
  const handleIncrease = (product) => {
    addToCart(product); // Add another instance of the same product
  };

  const handleDecrease = (productId) => {
    decreaseQuantity(productId); // Use the new function
  };

  const getItemCount = (productId) => {
    return cart.filter(item => item.id === productId).length;
  };

  const uniqueItems = cart.reduce((acc, item) => {
    if (!acc.some(i => i.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);
  return (
    <nav className="navbar">
      {/* Top Bar with Search */}
      <div className="top-bar">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </form>
      </div>
         <Link to="/" className="logo">ShopEasy</Link>
      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-container">
          {/* Logo */}
          

          {/* Categories with Dropdowns */}
          <div className="category-links">
            <Link to="/home">Home</Link>
            
            {categoryOrder.map((categoryKey) => {
              const category = categoryData[categoryKey];
              return (
                <div 
                  key={categoryKey}
                  className="dropdown-container"
                  onMouseEnter={() => toggleDropdown(categoryKey)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="dropdown-btn">
                    {category.title} <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`dropdown-icon ${activeDropdown === categoryKey ? 'rotate' : ''}`} 
                    />
                  </button>
                  {activeDropdown === categoryKey && (
                    <div className="dropdown-menu">
                      {category.subcategories.map((item) => (
                        <Link key={item.path} to={item.path}>{item.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* cart Icons */}
          <div className="nav-actions">
          <div className="nav-links">
          <div 
            className="cart-link-container"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <div 
              className="cart-icon"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </div>
            {isCartOpen && (
              <div className="cart-dropdown">
                {cart.length === 0 ? (
                  <p className="empty-cart-message">Your cart is empty</p>
                ) : (
                  <>
                    <div className="cart-items">
                      {uniqueItems.map(item => (
                        <div key={item.id} className="cart-item">
                          <img src={item.image} alt={item.name} />
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <p>${item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                            <button 
                                  onClick={() => handleDecrease(item.id)}
                                  className="quantity-btn"
                                  disabled={getItemCount(item.id) <= 1}
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                              <span>{getItemCount(item.id)}</span>
                              <button 
                                onClick={() => handleIncrease(item)}
                                className="quantity-btn"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="remove-btn"
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cart-summary">
                      <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
                      <Link 
                        to="/cart" 
                        className="checkout-btn"
                        onClick={() => setIsCartOpen(false)}
                      >
                        View Cart
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
</div>
</div>
            
            {/* User dropdown */}
          <div 
            className="user-dropdown-container"
            onMouseEnter={() => setIsUserDropdownOpen(true)}
            onMouseLeave={() => setIsUserDropdownOpen(false)}
          >
            <div 
              className="user-icon"
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>

            {isUserDropdownOpen && (
              <div className="user-dropdown">
                {isLoggedIn ? (
                  <>
                    <Link to="/account" className="dropdown-item">
                      My Account
                    </Link>
                    <Link to="/orders" className="dropdown-item">
                      My Orders
                    </Link>
                    <button 
                      className="dropdown-item"
                      onClick={() => setIsLoggedIn(false)} // Replace with actual logout
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="dropdown-item"
                      onClick={() => setIsUserDropdownOpen(false)}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="dropdown-item"
                      onClick={() => setIsUserDropdownOpen(false)}
                    >
                      <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;