import { Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { CartContext } from "../Context/CartContext/CartContext";
import "./Products.css";
import ProductCard from "../Components/ProductCard/ProductCard";

const Wishlist = () => {
  const { wishlistedItems } = useContext(CartContext);
  // console.log("your wishlist is: ", wishlistedItems);
  return (
    <>
      <Navbar />
      <Heading margin={"20px 50px"} size={"2xl"}>
        {wishlistedItems.length
          ? `Wishlist (${wishlistedItems.length} items)`
          : "Your Wishlist is Empty!😟"}
      </Heading>
      <div className="wishlist-container">
        {wishlistedItems.map((el) => (
          <ProductCard product={el} wishliststate={true} key={el.id} />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
