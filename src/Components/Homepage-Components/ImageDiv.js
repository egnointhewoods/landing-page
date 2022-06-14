import "../../Component-Styles/Homepage-Component-Styles/imageDiv.css";
import { Link } from "react-router-dom";
export default function ImageDiv() {
  return (
    <div className="imageDiv">
      <div className="shopNowDiv">
        <h1>First Aid for all of your summer adventures</h1>
        <Link to="/collections">
          <button className="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
