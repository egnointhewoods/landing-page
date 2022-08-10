import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Component-Styles/navbar.css";
import { useContext } from "react";
import { CartItemsContext } from "../Context/CartItemsContext";

export default function Navbarr({ cartItems }) {
  let { user, setUser } = useContext(CartItemsContext);

  const [scrollDir, setScrollDir] = useState(null);
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <div className="header">FREE SHIPPING on orders over $45</div>

      <div
        className={
          !scrollDir
            ? "nav"
            : scrollDir === "down"
            ? "nav scrolledNav"
            : "nav scrolledNavUp"
        }
      >
        <input type="checkbox" id="nav-check" />

        <div className="nav-links">
          <Link to="/">SHOP</Link>

          <Link to="/">INSIDE THE TIN</Link>

          <Link to="/">ABOUT</Link>

          <Link to="/">STORE LOCATOR</Link>
        </div>

        <div className="nav-header">
          <Link to="/">
            <div className="nav-title"></div>{" "}
          </Link>
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="utility-links">
          <div className="searchBar">
            <input className="text-input" type="text" placeholder="Search" />
          </div>
          <span className="logInSpan">
            {user ? (
              <Link onClick={() => setUser(null)} to="/logout">
                LOG Out
              </Link>
            ) : (
              <Link to="/login">LOG In</Link>
            )}
          </span>
        </div>
        <div className="cart">
          <Link to="/cart" className="cartLink">
            CART ({cartItems.length})
          </Link>{" "}
        </div>
        <div className="shopSubNav">
          <div>
            <Link to="/">BANDAGES</Link>
            <Link to="/">KITS</Link>
            <Link to="/">REFILLS</Link>
          </div>
        </div>
      </div>
    </>
  );
}
