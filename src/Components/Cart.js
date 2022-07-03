import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Component-Styles/cart.css";

export default function Cart({
  cartItems,
  cartItemCount,
  setCartItems,
  setCartItemCount
}) {
  const [total, setTotal] = useState(0);

  if (cartItemCount === 0) {
    return (
      <div className="cartDiv">
        <h2>Your Shopping Cart Is Empty</h2>
      </div>
    );
  } else
    return (
      <div className="cartDiv">
        <h2>Your Shopping Cart </h2>
        {cartItems.map((item) => {
          const [disabled, setDisabled] = useState(true);
          const [addItemCount, setAddItemCount] = useState(item.count);

          useEffect(() => {
            (function getTotal() {
              let total = 0;
              cartItems.forEach((item) => {
                total = total + item.price * item.count;
              });
              setTotal(total);
            })();
            if (addItemCount === 1) {
              setDisabled(true);
            } else {
              setDisabled(false);
            }
          }, [addItemCount]);

          return (
            <div className="cartedItemDiv" key={item.id}>
              <img src={item.image} alt="" className="cartedItemImage" />
              <div className="cartedItemDescription">
                <h3 className="cartedItemTitle">
                  {item.name}({addItemCount})
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum, error.
                </h4>
                <div className="addItemDiv">
                  <button
                    disabled={disabled}
                    className="plusMinus"
                    onClick={() => {
                      setAddItemCount(addItemCount - 1);
                      item.count = item.count - 1;
                    }}
                  >
                    -
                  </button>
                  <span className="addItemCount">{addItemCount}</span>
                  <button
                    className="plusMinus"
                    onClick={() => {
                      setAddItemCount(addItemCount + 1);
                      item.count = item.count + 1;
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="price2">
                $
                {(Math.round(item.price * addItemCount * 100) / 100).toFixed(2)}{" "}
                {/* Displays the price (only the first two decimals) */}
              </div>
            </div>
          );
        })}
        <a href="/cart" className="removeAllWrapper">
          <button className="addToCart removeAll">Remove All</button>
        </a>
        <hr />
        <div className="total">
          <h3>Subtotal</h3>{" "}
          <h4 id="price">${(Math.round(total * 100) / 100).toFixed(2)}</h4>
        </div>
        <div className="checkOutButtonWrapper">
          <button className="addToCart">Check Out</button>
          <Link to="/">Continue Shopping</Link>
        </div>
      </div>
    );
}
