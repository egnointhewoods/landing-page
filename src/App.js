import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";
import useCart from "./Hooks/useCart";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Collections from "./Components/Collections";
import { CartItemsProvider } from "./Context/CartItemsContext";
export default function App() {
  let { cartItems, setCartItems, cartItemCount, setCartItemCount } = useCart();
  return (
    <Router>
      <CartItemsProvider>
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
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </CartItemsProvider>
    </Router>
  );
}
