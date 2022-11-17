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
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const applyDiscount = (discount) =>
    setDiscountedPrice(eval(subtotal * ((100 - discount) / 100)).toFixed(2));
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("products-data")) || 0
  );
  function addProductsToLocalStorage(products) {
    setLocalData(products);
  }
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
    localStorage.setItem("products-data", JSON.stringify(localData));
  }, [cartItems, wishlistedItems, localData]);

  const [orders, setOrders] = useState([]);
  const checkoutCart = () => {
    setOrders(cartItems);
    setCartItems([]);
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((el) => el.id !== productToRemove.id);
  };
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const addSingleItemToCart = (productToAdd) => {
    setCartItems(addSingleItem(cartItems, productToAdd));
  };
  const addRemoveItem = (productToAdd) => {
    setCartItems(
      cartItems.map((el) =>
        el.id === productToAdd.id
          ? { ...el, quantity: productToAdd.quantity, size: productToAdd.size }
          : el
      )
    );
  };
  const addSingleItem = (cartItems, productToAdd) => {
    const itemExist = cartItems.find((el) => el.id === productToAdd.id);
    if (itemExist) {
      return cartItems.map((el) =>
        el.id === productToAdd.id
          ? {
              ...el,
              quantity: Number(el.quantity) + Number(productToAdd.quantity),
              size: productToAdd.size,
            }
          : el
      );
    }
    return [...cartItems, { ...productToAdd }];
  };
  const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((el) => el.id === productToAdd.id);
    if (existingCartItem) {
      return cartItems.map((el) =>
        el.id === productToAdd.id ? { ...el, quantity: el.quantity + 1 } : el
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1, size: "" }];
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
        addSingleItemToCart,
        addRemoveItem,
        applyDiscount,
        discountedPrice,
        checkoutCart,
        orders,
        localData,
        addProductsToLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
