import "../Homepage-Component-Styles/bestSellers.css";
import useFetch from "../../Hooks/useFetch";
import { useEffect, useState } from "react";

export default function BestSellers() {
  const { error, isLoading, data: items } = useFetch(
    "https://dummyjson.com/products"
  );

  if (items) {
    let trendingItems = [];
    for (let i = 0; i < 4; i++) {
      trendingItems.push(items.products[i]);
    }
    console.log(trendingItems);
    return (
      <div className="bestSellersDiv">
        <span>BEST SELLERS - </span>
        <h2>Some of our most loved products.</h2>
        <div className="productList">
          {trendingItems.map((item) => {
            return (
              <div className="productCard" key={item.id}>
                <h3>{item.title}</h3>
                <h3>{item.price}$</h3>
                <img
                  src="https://cdn.shopify.com/s/files/1/0068/9206/0724/files/Kits2_2000x.jpg?v=1650381101"
                  alt="Product"
                />
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
