import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/user/userdashboard/Userdashboard";
import Home from "./pages/user/home/Home.js";
import Shirts from "./pages/user/mens/Shirts.js";
import { CartProvider } from './context/CartContext.js';
import Cart from './pages/user/cart/Cart';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        {/* Dashboard Layout (Navbar + Outlet) */}
        <Route path="/" element={<UserDashboard />}>
        <Route path="/home" element={<Home />} />
        <Route path="mens/shirts" element={<Shirts />} />
        <Route path="/cart" element={<Cart />} />
        </Route>

       
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;