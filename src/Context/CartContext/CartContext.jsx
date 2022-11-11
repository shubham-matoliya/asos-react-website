import React, { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((el) => el.id === productToAdd.id);
    if (existingCartItem) {
      return cartItems.map((el) =>
        el.id === productToAdd.id ? { ...el, quantity: el.quantity + 1 } : el
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
