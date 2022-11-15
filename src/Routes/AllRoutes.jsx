import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import CartPage from "../Pages/CartPage";
import Login from "../Pages/Login";

import SignUp from "../Pages/SignUp";
import SingleProduct from "../Pages/SingleProduct";
import Singleuser from "../Pages/Singleuser";
import Wishlist from "../Pages/Wishlist";
import ShoesPage from "../Pages/ShoesPage";
import PrivateRouteProvider from "../Components/PrivateAuth/PrivateRoute";
import Orders from "../Pages/Orders";
import AdminPanel from "../Pages/AdminPanel";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route
        path="/products/:category/:id"
        element={
          <PrivateRouteProvider>
            <SingleProduct />
          </PrivateRouteProvider>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRouteProvider>
            <CartPage />
          </PrivateRouteProvider>
        }
      />

      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/orders"
        element={
          <PrivateRouteProvider>
            <Orders />
          </PrivateRouteProvider>
        }
      />
      <Route
        path="/singleuser"
        element={
          <PrivateRouteProvider>
            <Singleuser />
          </PrivateRouteProvider>
        }
      />
      <Route
        path="/adminpanel"
        element={
          <PrivateRouteProvider>
            <AdminPanel />
          </PrivateRouteProvider>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRouteProvider>
            <Wishlist />
          </PrivateRouteProvider>
        }
      />
      {/* <Route
        path="/shoes"
        element={
          <PrivateRouteProvider>
            <ShoesPage />
          </PrivateRouteProvider>
        }
      /> */}
    </Routes>
  );
};

export default AllRoutes;
