import { useState } from "react";
import { Link } from "react-router-dom";
import "../Component-Styles/cart.css";
import useFetch from "../Hooks/useFetch";
import { useContext } from "react";
import { CartItemsContext } from "../Context/CartItemsContext";

export default function Cart() {
  let total = 0;
  const { user, setUser } = useContext(CartItemsContext);
  const { error, isLoading, data: cart } = useFetch(
    `https://fakestoreapi.com/carts/user/${user?.id}`
  );
  console.log(cart);
  const { error_items, isLoading_items, data: items } = useFetch(
    "https://fakestoreapi.com/products"
  );
  function decrementQuantity(userId) {
    fetch(`https://fakestoreapi.com/carts/1`, {
      method: "PUT",
      body: JSON.stringify({
        userId: { userId },
        products: [{ productId: 1, quantity: 3 }]
      })
    });
  }

  if (!user) {
    return (
      <div className="cartDiv">
        <h2>Your Shopping Cart Is Empty</h2>
      </div>
    );
  } else
    return (
      <div className="cartDiv">
        <h2>Your Shopping Carts </h2>

        {cart?.map((mappedCart) => {
          return (
            <div>
              {mappedCart.products.map((item) => {
                console.log(item);
                const fetchedItemData = items?.find(
                  (x) => x.id === item.productId
                );
                console.log(fetchedItemData);
                total = total + fetchedItemData?.price * item.quantity;
                return (
                  <div className="cartedItemDiv" key={item.id}>
                    <img
                      src={fetchedItemData.image}
                      alt=""
                      className="cartedItemImage"
                    />
                    <div className="cartedItemDescription">
                      <h3 className="cartedItemTitle">
                        {item.name}({item.quantity})
                      </h3>
                      <h4>{fetchedItemData.description}</h4>
                      <div className="addItemDiv">
                        <button
                          className="plusMinus"
                          /* onClick={() => {
                          setAddItemCount(addItemCount - 1);
                          item.count = item.count - 1;
                        }} */
                        >
                          -
                        </button>
                        <span className="addItemCount">{item.quantity}</span>
                        <button
                          className="plusMinus"
                          /* onClick={() => {
                          setAddItemCount(addItemCount + 1);
                          item.count = item.count + 1;
                        }} */
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="price2">
                      ${fetchedItemData?.price * item.quantity}
                    </div>
                  </div>
                );
              })}
              <a href="/cart" className="removeAllWrapper">
                <button className="addToCart removeAll">Remove All</button>
              </a>
              <hr />
              <div className="total">
                <h3>Subtotal</h3> <h4 id="price">{total}</h4>
              </div>
              <div className="checkOutButtonWrapper">
                <button className="addToCart">Check Out</button>
                <Link to="/">Continue Shopping</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
}
