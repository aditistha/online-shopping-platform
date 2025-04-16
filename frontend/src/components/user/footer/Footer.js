// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram,
  faPinterest
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3>About ShopEasy</h3>
            <p>Your one-stop destination for quality products at affordable prices. We're committed to providing the best shopping experience.</p>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Shopping & Categories</h3>
            <ul>
              <li><Link to="/">Men's Shopping</Link></li>
              <li><Link to="/about">Women's Shopping</Link></li>
              <li><Link to="/contact">Kid's Shopping</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/returns">Return Policy</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Subscribe to get updates on new arrivals and special offers.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <i className="visa">Visa</i>
              <i className="paypal">PayPal</i>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;