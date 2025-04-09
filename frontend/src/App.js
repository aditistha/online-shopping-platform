
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './contexts/CartContext';
import Navbar from './components/user/navbar/Navbar';
// import ProductListing from './pages/ProductListing';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
        
        </Routes>
      </Router>
    
  );
}

export default App;