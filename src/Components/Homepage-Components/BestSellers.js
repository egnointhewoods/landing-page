import "../Homepage-Component-Styles/bestSellers.css";

export default function BestSellers() {
  return (
    <div className="bestSellersDiv">
      <span>BEST SELLERS - </span>
      <h2>Some of our most loved products.</h2>
      <div className="productList">
        <div className="productCard">
          <h3>Item 1</h3>
          <h4>Price: 20$</h4>
        </div>
        <div className="productCard">
          <h3>Item 2</h3>
          <h4>Price: 21$</h4>
        </div>
        <div className="productCard">
          <h3>Item 3</h3>
          <h4>Price: 200$</h4>
        </div>
      </div>
    </div>
  );
}
