import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ProductCard from "../Components/ProductCard/ProductCard";
import "./Products.css";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchProducts = () => {
    setloading(true);
    axios(`http://localhost:8080/products`).then((res) => {
      setProducts(res.data);
      setloading(false);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="products-container">
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          products.map((el) => <ProductCard product = {el} key={el.id}/>)
        )}
      </div>
    </>
  );
};

export default Products;
