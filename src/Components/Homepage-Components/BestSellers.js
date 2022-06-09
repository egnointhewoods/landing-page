import "../Homepage-Component-Styles/bestSellers.css";
import useFetch from "../../Hooks/useFetch";

export default function BestSellers() {
  const { error, isLoading, data: items } = useFetch(
    "https://my-json-server.typicode.com/egnointhewoods/landing-page/db"
  );

  if (items) {
    return (
      <div className="bestSellersDiv">
        <h3>BEST SELLERS - </h3>
        <h2>Some of our most loved products.</h2>
        <div className="productList">
          {items.bestSellers.map((item) => {
            return (
              <div className="productCard" key={item.id}>
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
