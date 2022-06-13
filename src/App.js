import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";
import useCart from "./Hooks/useCart";
import Cart from "./Components/Cart";
export default function App() {
  let {
    cartItems,
    setCartItems,
    cartItemCount,
    setCartItemCount,
    total
  } = useCart();
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
        </Routes>
      </div>
    </Router>
  );
}
