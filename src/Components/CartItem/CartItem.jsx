import React from "react";
import "./CartItem.css";
const CartItem = ({ image, title, price, quantity }) => {
  return (
    <div className="incart-item">
      <div>
        <img src={image} />
      </div>
      <div className="item-details">
        <h2>{title}</h2>
        <p>
          <b>Price: </b>${price}
        </p>
        <div className="item-quantity">
          <span>
            <b>Quantity: </b>
          </span>
          <button>
            <span>-</span>
          </button>
          <span>{quantity}</span>
          <button>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
