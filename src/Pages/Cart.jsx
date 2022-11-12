import { Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { CartContext } from "../Context/CartContext/CartContext";
import "./cartpage.css";
import CartItem from "../Components/CartItem/CartItem";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navbar />
      <div>
        <Heading size={"2xl"} textAlign="center">
          {cartItems.length
            ? `Your Cart 🛒 (${cartItems.length} items) 😊`
            : `Your Cart is Empty! 😟`}
        </Heading>
        <div className="cart-container">
          <div>
            {cartItems.map((el) => (
              <CartItem
                image={el.inImage}
                title={el.cardDetails}
                price={el.price}
                quantity={el.quantity}
              />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
