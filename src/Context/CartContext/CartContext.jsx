import React, { createContext } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContextProvider;
