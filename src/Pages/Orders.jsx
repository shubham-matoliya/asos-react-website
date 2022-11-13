import React, { useContext } from "react";
import { Heading } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContext";
import "./cartpage.css";
import Navbar from "../Components/Navbar/Navbar";
import CartItem from "../Components/CartItem/CartItem";
const Orders = () => {
  const { orders } = useContext(CartContext);
  console.log("orders are", orders);
  clearInterval(+localStorage.getItem("setIntervalID"));

  return (
    <>
      <Navbar />

      <Heading size={"2xl"} textAlign="center">
        {orders.length
          ? `Your Orders (${orders.length} items) 😊`
          : `You don't have any Orders yet`}
      </Heading>
      <div className="cart-container">
        <div>
          {orders.map((el) => (
            <CartItem product={el} isOrder={true} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Orders;
