import { useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  return { cartItems, setCartItems, cartItemCount, setCartItemCount };
}
