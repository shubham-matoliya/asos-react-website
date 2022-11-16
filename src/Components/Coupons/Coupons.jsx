import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./Coupons.css";
const Coupons = () => {
  const { applyDiscount } = useContext(CartContext);
  return (
    <div className="discount" onChange={(e) => applyDiscount(e.target.value)}>
      <p>Apply Coupon for discount</p>
      <input type="radio" name="coupon" id="coupon20" value="20" />
      <label htmlFor="coupon20">
        <span>20% OFF</span>
        <p>DISCOUNT 20</p>
      </label>
      <input type="radio" name="coupon" id="coupon30" value="30" />
      <label htmlFor="coupon30">
        <span>30% OFF</span>
        <p>DISCOUNT 30</p>
      </label>
      <input type="radio" name="coupon" id="coupon50" value="50" />
      <label htmlFor="coupon50">
        <span>50% OFF</span>
        <p>DISCOUNT 50</p>
      </label>
    </div>
  );
};

export default Coupons;
