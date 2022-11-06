import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";
import useCart from "./Hooks/useCart";
import Cart from "./Components/Cart";
import Collections from "./Components/Collections";
export default function App() {
  let { cartItems, setCartItems, cartItemCount, setCartItemCount } = useCart();
  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} cartItemCount={cartItemCount} />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route
            path="/details"
            element={
              <Details
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                cartItemCount={cartItemCount}
                setCartItems={setCartItems}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route path="/collections" element={<Collections />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
