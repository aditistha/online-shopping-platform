// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000); // Hide after 3 seconds
  };
  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      // Find the index of the last occurrence of this product
      const lastIndex = prevCart.map(item => item.id).lastIndexOf(productId);
      if (lastIndex !== -1) {
        const newCart = [...prevCart];
        newCart.splice(lastIndex, 1); // Remove just one instance
        return newCart;
      }
      return prevCart;
    });
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart,
      decreaseQuantity,
      notification
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);