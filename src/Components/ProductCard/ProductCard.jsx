import React from "react";
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
      <a href="#" className="productName">
        {cardDetails}
      </a>
      <a href="#">
        $<span className="price">{price}</span>
      </a>
    </div>
  );
};

export default ProductCard;
