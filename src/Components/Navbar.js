import "./navbar.css";
export default function Navbarr() {
  return (
    <>
      <div className="header">FREE SHIPPING on orders over $45</div>

      <div className="nav">
        <input type="checkbox" id="nav-check" />

        <div className="nav-links">
          <a href="/" target="_blank" rel="noreferrer">
            SHOP
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            INSIDE THE TIN
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            ABOUT
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            STORE LOCATOR
          </a>
        </div>

        <div className="nav-header">
          <div className="nav-title"></div>
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
          <a href="/" target="_blank" rel="noreferrer">
            LOG IN
          </a>
        </div>
        <div className="cart">
          <a href="/" target="_blank" rel="noreferrer">
            CART
          </a>
        </div>
        <div className="shopSubNav">
          <div>
            <a href="/" target="_blank" rel="noreferrer">
              BANDAGES
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              HYDROCOLLOID
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              KITS
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              REFILLS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
