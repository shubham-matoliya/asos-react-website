import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./CartDropdown.css";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-box">
      <div className="cart-icon">
        <Link to={"/cart"}>
          <i className="fa-solid fa-cart-shopping" />
          <span className="No-of-items">0</span>
        </Link>
      </div>
      <div className="cart-window">
        <h2>Shopping Bag</h2>
        <div className="cart-wrapper">
          {/* <!-- product divs will be add in it dynamically --> */}
          {/* <!-- item 1 --> */}
          {cartItems.map((el) => (
            <div className="cart-item">
              <img src={el.outImage} alt={el.cardDetails} />
              <div className="details">
                <h3>Item Name:</h3>
                <p>
                  {el.cardDetails}
                  <span className="quantity">
                    <b>Quantity:</b> {el.quantity}
                  </span>
                  <span className="size">
                    <b>Size:</b> M
                  </span>
                  <span className="price">
                    <b>Price:</b> {`$${el.price}`}
                  </span>
                </p>
              </div>
              <div className="cancel">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          <b>Subtotal:</b> $0.00
        </div>
        <div className="checkout">Checkout</div>
        <div className="view-cart">View Cart</div>
      </div>
    </div>
  );
};

export default CartDropdown;
