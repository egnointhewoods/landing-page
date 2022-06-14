import { useState } from "react";

export default function useCart() {
  let [cartItems, setCartItems] = useState([]);
  let [cartItemCount, setCartItemCount] = useState(0);

  return { cartItems, setCartItems, cartItemCount, setCartItemCount };
}
