// src/pages/user/home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { menlatest, categoriesdata, womenlatest, kidslatest, accessoriesproducts  } from '../../../data/Homedata';
import './Home.css';
import { useCart } from '../../../context/CartContext';
import Notification from '../../../components/user/notification/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCartShopping 
} from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const { addToCart, notification } = useCart();
  
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <Notification message={notification} />

      <section className="hero-banner">
        <div className="hero-content">
          <h1>Summer Sale Up to 50% Off</h1>
          <p>Discover our new collection</p>
          <Link to="/mens/shirts" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categoriesdata.map((category) => (
            <Link to={category.path} key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Men's Latest</h2>
        <div className="products-grid">
          {menlatest.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={product.category}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <div className='product-name-rate'>
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  
                  </div>
                  </div>
                  <div className='product-price-cart'>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                <Link
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }} 
                    className="cart-icon1"
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
                </div>
                </div>
              </Link>
               
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Women's Latest</h2>
        <div className="products-grid">
          {womenlatest.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={product.category}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <div className='product-name-rate'>
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  
                  </div>
                  </div>
                  <div className='product-price-cart'>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                <Link to="/cart" className="cart-icon1">
                            <FontAwesomeIcon icon={faCartShopping} />
                            
                 </Link>
                </div>
                </div>
              </Link>
               
            </div>
          ))}
        </div>
      </section>
      <section className="featured-products">
        <h2>Kid's Latest</h2>
        <div className="products-grid">
          {kidslatest.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={product.category}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <div className='product-name-rate'>
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  
                  </div>
                  </div>
                  <div className='product-price-cart'>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                <Link to="/cart" className="cart-icon1">
                            <FontAwesomeIcon icon={faCartShopping} />
                            
                 </Link>
                </div>
                </div>
              </Link>
               
            </div>
          ))}
        </div>
      </section>
      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h2>New Arrivals</h2>
          <p>Discover the latest trends in fashion</p>
          <Link to="/womens" className="explore-btn">
            Explore Now
          </Link>
        </div>
      </section>
      <section className="explore-section">
        <h2 className="section-title">Explore Our Products</h2>
        
        {accessoriesproducts.map((product, index) => (
          <div 
            key={product.id} 
            className={`product-showcase ${index % 2 === 0 ? '' : 'reverse'}`}
          >
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={product.path} className="explore-btn">
                View Collection
              </Link>
            </div>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;