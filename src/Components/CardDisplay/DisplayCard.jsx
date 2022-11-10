import React from "react";
import "./DisplayCard.css";
const DisplayCard = ({ cardDetails }) => {
  return (
    <div className="displaycard-container">
      {cardDetails.map((el) => (
        <div>
          <div className="image-container">
            <img src={el.image} />
          </div>
          <h2>{el.title}</h2>
          <p>{el.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
