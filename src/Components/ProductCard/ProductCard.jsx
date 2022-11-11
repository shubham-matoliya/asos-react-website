import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./ProductCard.css";
import { useToast } from "@chakra-ui/react";

const ProductCard = ({ product, wishliststate = false }) => {
  const { id, outImage, inImage, cardDetails, price } = product;
  const {
    addItemToCart,
    addItemToWishList,
    removeItemFromWishlist,
    wishlistedItems,
  } = useContext(CartContext);
  const toast = useToast();
  const [heart, setHeart] = useState(wishliststate);
  const addProductToCart = () => addItemToCart(product);

  const addToWishList = () => {
    addItemToWishList(product);
    toast({
      title: `Item added to Wishlist`,
      status: "success",
      isClosable: true,
      position: "top",
      duration: 3000,
    });
  };

  const removeFromWishlist = () => {
    removeItemFromWishlist(wishlistedItems, product);
    toast({
      title: `Item removed from Wishlist`,
      status: "error",
      isClosable: true,
      position: "top",
      duration: 3000,
    });
  };

  return (
    <div className="parent" id={id}>
      <div className="outer-image">
        <div className="wishlist-icon">
          <i
            className="fa-solid fa-heart"
            style={{ color: heart ? "red" : "lightgray" }}
            onClick={() => {
              setHeart(!heart);
              if (!heart) addToWishList();
              else removeFromWishlist();
            }}
          ></i>
        </div>
        <img src={outImage} alt={cardDetails} />
        <div className="inner-image">
          <img src={inImage} alt={cardDetails} />
        </div>
        <button
          className="quickshop"
          onClick={() => {
            addProductToCart();
            toast({
              title: `Item added to Cart`,
              status: "info",
              isClosable: true,
              position: "top",
              duration: 3000,
            });
          }}
        >
          Quickshop
        </button>
      </div>
      <Link to="/singleproducts" className="productName">
        {cardDetails}
      </Link>
      <Link to="/singleproducts">
        $<span className="price">{price}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
