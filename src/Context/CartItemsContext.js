import { useState, createContext } from "react";

export const CartItemsContext = createContext({});

export const CartItemsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <CartItemsContext.Provider value={{ user, setUser }}>
      {children}
    </CartItemsContext.Provider>
  );
};
