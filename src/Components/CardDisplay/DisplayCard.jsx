import React from "react";
import { Link } from "react-router-dom";
import "./DisplayCard.css";
const DisplayCard = ({ cardDetails }) => {
  return (
    <div className="displaycard-container">
      {cardDetails.map((el) => (
        <div>
          <div className="image-container">
           <Link to={'/products/Clothing'}> <img src={el.image} alt={el.title} /></Link>
          </div>
          <h2>{el.title}</h2>
          <p>{el.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
