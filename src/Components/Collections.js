import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "../Component-Styles/collections.css";

export default function BestSellers() {
  const { error, isLoading, data: items } = useFetch(
    "https://fakestoreapi.com/products"
  );

  let navigate = useNavigate();

  function getDetails(item) {
    //Redirects the page
    navigate(`/details?itemdetails=${item.id}`);
  }

  if (items) {
    return (
      <div className="bestSellersDiv">
        <h2>Bandages</h2>
        <h3>
          Premium materials that seal, protect and get you back in the game with
          a bit of style.
        </h3>
        <div className="productList">
          {items.bestSellers.map((item) => {
            return (
              <div
                className="productCard"
                key={item.id}
                onClick={() => getDetails(item)}
              >
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
                <button className="button">SHOP NOW</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (error) {
    return <>{error}</>;
  } else if (isLoading) {
    return <>Loading...</>;
  }
}
