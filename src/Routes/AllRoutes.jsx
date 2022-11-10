import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Checkout from "../Pages/Checkout";
import SignUp from "../Pages/SignUp";
import SingleProduct from "../Pages/SingleProduct";
import Singleuser from "../Pages/Singleuser";
import Wishlist from "../Pages/Wishlist";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/singleuser" element={<Singleuser />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default AllRoutes;