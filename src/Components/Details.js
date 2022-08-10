import useFetch from "../Hooks/useFetch";
import "../Component-Styles/details.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Details({ cartItems, setCartItems, setCartItemCount }) {
  const { error, isLoading, data: items } = useFetch(
    "https://my-json-server.typicode.com/egnointhewoods/landing-page/db"
  );
  let navigate = useNavigate();
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

  function updateCartItems(item) {
    let newItem = item;
    newItem.count = addItemCount;
    setCartItems([...cartItems, newItem]);
    setAddItemCount(1);
    setCartItemCount(addItemCount);
    navigate("/cart");
  }
  if (!error && !isLoading && items) {
    return (
      <>
        {items.bestSellers.map((item) => {
          if (Object.values(item).indexOf(itemId) > -1) {
            return (
              <div className="itemDetailsWrapper" key="item.id">
                <img src={item.image} alt="Product" className="itemImage" />
                <div className="itemDetails">
                  <h2 className="itemId">{item.name}</h2>
                  <hr style={{ width: "100%" }} />
                  <div className="price">
                    <h2>
                      $
                      {(
                        Math.round(item.price * addItemCount * 100) / 100
                      ).toFixed(2)}
                    </h2>
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
                  <button
                    className="addToCart"
                    onClick={() => updateCartItems(item)}
                  >
                    ADD TO CART
                  </button>
                  <p>{item.description} Lorem ipsum dolor.</p>
                  <ul>
                    <li>
                      72 Count Standard Fabric Bandages in Various Patterns
                    </li>
                    <li>54 Count Small Fabric Bandages in Various Patterns</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
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
