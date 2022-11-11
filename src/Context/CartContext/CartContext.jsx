import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("asos-cartItems")) || []
  );
  const [wishlistedItems, setWishlistedItems] = useState(
    JSON.parse(localStorage.getItem("wishlisted-items")) || []
  );
  const [subtotal, setSubtotal] = useState(
    +localStorage.getItem("asos-subtotal") || 0
  );

  const totalItems = cartItems.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);
  useEffect(() => {
    setSubtotal(
      cartItems.reduce((total, curr) => {
        return total + curr.quantity * curr.price;
      }, 0)
    );
    localStorage.setItem("asos-subtotal", JSON.stringify(subtotal));
    localStorage.setItem("asos-cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlisted-items", JSON.stringify(wishlistedItems));
  }, [cartItems, wishlistedItems]);

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((el) => el.id !== productToRemove.id);
  };
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
  const addItemToWishList = (productToAdd) => {
    setWishlistedItems([...wishlistedItems, { ...productToAdd }]);
  };
  const removeItemFromWishlist = (wishlistedItems, productToRemove) => {
    setWishlistedItems(removeWishlistItem(wishlistedItems, productToRemove));
  };
  const removeWishlistItem = (wishlistedItems, productToRemove) => {
    return wishlistedItems.filter((el) => el.id !== productToRemove.id);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        subtotal,
        totalItems,
        removeItemFromCart,
        addItemToWishList,
        removeItemFromWishlist,
        wishlistedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
