import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { id, outImage, inImage, cardDetails, price } = product;
  return (
    <div className="parent" id={id}>
      <div className="outer-image">
        <img src={outImage} alt={cardDetails} />
        <div className="inner-image">
          <img src={inImage} alt={cardDetails} />
        </div>
        <button className="quickshop">Quickshop</button>
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
