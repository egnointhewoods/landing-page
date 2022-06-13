import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Component-Styles/navbar.css";

export default function Navbarr({ cartItems }) {
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
          <a href="/">SHOP</a>

          <a href="/">INSIDE THE TIN</a>

          <a href="/">ABOUT</a>

          <a href="/">STORE LOCATOR</a>
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
          <a href="/">LOG IN</a>
        </div>
        <div className="cart">
          <Link to="/cart">CART ({cartItems.length})</Link>{" "}
        </div>
        <div className="shopSubNav">
          <div>
            <a href="/">BANDAGES</a>
            <a href="/">HYDROCOLLOID</a>
            <a href="/">KITS</a>
            <a href="/">REFILLS</a>
          </div>
        </div>
      </div>
    </>
  );
}
