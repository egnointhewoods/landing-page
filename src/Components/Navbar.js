import "./navbar.css";
export default function Navbarr() {
  return (
    <>
      <div className="header">FREE SHIPPING on orders over $45</div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />

        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links left">
          <a href="//github.io/jo_geek" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>

        <div className="nav-header">
          <div className="nav-title">Welly</div>
        </div>

        <div className="nav-links right">
          <a href="//github.io/jo_geek" target="_blank" rel="noreferrer">
            Dude
          </a>
        </div>
      </div>
    </>
  );
}
