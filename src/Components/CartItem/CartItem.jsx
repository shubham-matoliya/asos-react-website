import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext/CartContext";
import "./CartItem.css";
const CartItem = ({ product, isOrder }) => {
  const { id, outImage, cardDetails, price, quantity, size, category } =
    product;
  const { addRemoveItem } = useContext(CartContext);
  const [item, setItem] = useState(product);
  console.log("product in cart is", product);
  // console.log("quantity changed", item);
  // let category;
  // if (id <= 40) category = "products";
  // else if (id > 40 && id <= 106) category = "shoes";
  useEffect(() => {
    addRemoveItem(item);
  }, [item]);
  return (
    <div className="incart-item">
      <div>
        <Link to={`/products/${category}/${id}`}>
          {" "}
          <img src={outImage} />
        </Link>
      </div>
      <div className="item-details">
        <h2>{cardDetails}</h2>
        <p>
          <b>Size: </b>
          {product.size ? (
            product.size
          ) : (
            <Link style={{ color: "red" }} to={`/products/${category}/${id}`}>
              Please select size
            </Link>
          )}
        </p>
        <p>
          <b>Category: </b>
          {category}
        </p>
        <p>
          <b>Price: </b>${price}
        </p>
        <div className="item-quantity">
          <span>
            <b>Quantity: </b>
          </span>
          {!isOrder ? (
            <button
              onClick={() => setItem({ ...item, quantity: item.quantity - 1 })}
            >
              <span>-</span>
            </button>
          ) : null}
          <span>{item.quantity}</span>
          {!isOrder ? (
            <button
              onClick={() => setItem({ ...item, quantity: item.quantity + 1 })}
            >
              <span>+</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
