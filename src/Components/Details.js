import useFetch from "../Hooks/useFetch";
import "../Component-Styles/details.css";
import { useEffect, useState } from "react";
export default function Details() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let itemId = params.get("itemdetails");
  const [addItemCount, setAddItemCount] = useState(1);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (addItemCount === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [addItemCount]);
  const { error, isLoading, data: items } = useFetch(
    "https://my-json-server.typicode.com/egnointhewoods/landing-page/db"
  );
  if (!error && !isLoading && items) {
    return (
      <>
        {items.bestSellers.map((item) => {
          if (Object.values(item).indexOf(itemId) > -1) {
            console.log(itemId);
            return (
              <div className="itemDetailsWrapper">
                <img src={item.image} alt="Product" className="itemImage" />
                <div className="itemDetails">
                  <h2 className="itemId">{item.name}</h2>
                  <hr style={{ width: "100%" }} />
                  <div className="price">
                    <h2>${item.price}</h2>
                    <div className="addItemDiv">
                      <button
                        disabled={disabled}
                        className="plusMinus"
                        onClick={() => setAddItemCount(addItemCount - 1)}
                      >
                        -
                      </button>
                      <span className="addItemCount">{addItemCount}</span>
                      <button
                        className="plusMinus"
                        onClick={() => setAddItemCount(addItemCount + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span>Free shipping on orders over $45</span>
                  <button className="addToCart">ADD TO CART</button>
                  <p>
                    {item.description} Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Nemo vero ducimus aut, unde expedita
                    aliquam voluptatibus molestiae rem blanditiis cum.
                  </p>
                  <ul>
                    <li>
                      72 Count Standard Fabric Bandages in Various Patterns
                    </li>
                    <li>54 Count Small Fabric Bandages in Various Patterns</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error voluptatum voluptas aperiam.
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
}
