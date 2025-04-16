// src/pages/user/cart/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faMinus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart} = useCart();

  const getItemCount = (productId) => {
    return cart.filter(item => item.id === productId).length;
  };

  const uniqueItems = cart.reduce((acc, item) => {
    if (!acc.some(i => i.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDecrease = (productId) => {
    const lastIndex = cart.map(item => item.id).lastIndexOf(productId);
    if (lastIndex !== -1) {
      removeFromCart(cart[lastIndex].id);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            {uniqueItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleDecrease(item.id)}
                      className="quantity-btn"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="quantity">{getItemCount(item.id)}</span>
                    <button 
                      onClick={() => handleIncrease(item)}
                      className="quantity-btn"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button 
                      onClick={() => {
                        // Remove all instances of this item
                        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
                        removeFromCart(newCart);
                      }}
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
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-actions">
              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;