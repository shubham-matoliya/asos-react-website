import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { id, outImage, inImage, cardDetails, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="parent" id={id}>
      <div className="outer-image">
        <img src={outImage} alt={cardDetails} />
        <div className="inner-image">
          <img src={inImage} alt={cardDetails} />
        </div>
        <button className="quickshop" onClick={addProductToCart}>
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
