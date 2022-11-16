import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./ProductCard.css";
import { useToast } from "@chakra-ui/react";

const ProductCard = ({ product, wishliststate = false }) => {
  const { id, outImage, inImage, cardDetails, price, category } = product;
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
  console.log("product consoled is", product);
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
        <Link to={`/products/${id}`}>
          <img src={outImage} alt={cardDetails} />
        </Link>
        <div className="inner-image">
          <Link to={`/products/${category}/${id}`}>
            <img src={inImage} alt={cardDetails} />
          </Link>
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
      <Link to={`/products/${category}/${id}`} className="productName">
        {cardDetails}
      </Link>
      <Link to={`/products/${category}/${id}`}>
        $<span className="price">{price}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
