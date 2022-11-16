import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./CartDropdown.css";
import { useToast } from "@chakra-ui/react";
const CartDropdown = () => {
  const toast = useToast();
  const { cartItems, subtotal, totalItems, removeItemFromCart } =
    useContext(CartContext);
  // console.log(totalItems);
  return (
    <div className="cart-box">
      <div className="cart-icon">
        <Link to={"/cart"}>
          <i className="fa-solid fa-cart-shopping" />
          <span className="No-of-items">{totalItems}</span>
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
                    <b>Category:</b> {el.category}
                  </span>
                  <span className="price">
                    <b>Price:</b> {`$${el.price}`}
                  </span>
                </p>
              </div>
              <div className="cancel">
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    removeItemFromCart(el);
                    toast({
                      title: "Item Removed!",
                      description: "",
                      status: "error",
                      position: "top",
                      duration: 5000,
                      isClosable: true,
                    });
                  }}
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          <b>Subtotal:</b> ${subtotal}
        </div>
        <div className="checkout">
          <NavLink to={"/cart"}>Checkout</NavLink>
        </div>
        <div className="view-cart">
          <NavLink to={"/cart"}>View Cart</NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
