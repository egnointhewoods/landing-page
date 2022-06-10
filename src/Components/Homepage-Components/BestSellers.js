import "../../Component-Styles/Homepage-Component-Styles/bestSellers.css";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function BestSellers() {
  const { error, isLoading, data: items } = useFetch(
    "https://my-json-server.typicode.com/egnointhewoods/landing-page/db"
  );

  let navigate = useNavigate();

  function getDetails(item) {
    //Redirects the page
    navigate(`/details?itemdetails=${item.id}`);
  }

  if (items) {
    return (
      <div className="bestSellersDiv">
        <h3>BEST SELLERS - </h3>
        <h2>Some of our most loved products.</h2>
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
