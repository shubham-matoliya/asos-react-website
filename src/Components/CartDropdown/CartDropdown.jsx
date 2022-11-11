import React from "react";
import { Link } from "react-router-dom";
import "./CartDropdown.css";
const CartDropdown = () => {
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
          <div className="cart-item">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16550934/2021/12/17/018aed81-4de2-429e-832c-041c3537bdc41639753249564Coats1.jpg"
              alt=""
            />
            <div className="details">
              <h3>Item Name:</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                <span className="quantity">
                  <b>Quantity:</b> 1
                </span>
                <span className="size">
                  <b>Size:</b> M
                </span>
                <span className="price">
                  <b>Price:</b> $23.44
                </span>
              </p>
            </div>
            <div className="cancel">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          {/* <!-- item 2 --> */}
          <div className="cart-item">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16550934/2021/12/17/018aed81-4de2-429e-832c-041c3537bdc41639753249564Coats1.jpg"
              alt=""
            />
            <div className="details">
              <h3>Item Name</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                <span className="quantity">Quantity: 1</span>
                <span className="size">Size: M</span>
                <span className="price">Price: $23.44</span>
              </p>
            </div>
            <div className="cancel">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
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
