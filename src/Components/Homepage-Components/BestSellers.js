import "../Homepage-Component-Styles/bestSellers.css";
import useFetch from "../../Hooks/useFetch";

export default function BestSellers() {
  const { error, isLoading, data: items } = useFetch(
    "https://my-json-server.typicode.com/egnointhewoods/landing-page/db"
  );

  if (items) {
    return (
      <div className="bestSellersDiv">
        <span>BEST SELLERS - </span>
        <h2>Some of our most loved products.</h2>
        <div className="productList">
          {items.items.map((item) => {
            return (
              <div className="productCard" key={item.id}>
                <h3>{item.name}</h3>
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
