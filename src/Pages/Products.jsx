import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ProductCard from "../Components/ProductCard/ProductCard";
import "./Products.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContext";
const Products = () => {
  const toast = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("asc");
  const [total, setTotal] = useState(0);
  const newarr = new Array(total).fill(0);

  const { wishlistedItems } = useContext(CartContext);
  const fetchProducts = (page = 1, limit = 10, order) => {
    setloading(true);
    axios(`http://localhost:8080/products`).then((res) =>
      setTotal(Math.ceil(res.data.length / limit))
    );
    console.log("order is ", order);
    axios(
      `http://localhost:8080/products?_page=${page}&_limit=${limit}&_sort=price&_order=${order}`
    )
      .then((res) => {
        setProducts(res.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(true);
        toast({
          title: err.message,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 3000,
        });
      });
  };
  useEffect(() => {
    fetchProducts(page, limit, order);
  }, [page, limit, order]);
  return (
    <>
      <Navbar />
      <div className="pagination-container">
        <div className="select-limit">
          <label>Limit per Page:</label>
          <select onChange={(e) => setLimit(e.target.value)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="select-page">
          <p>Select Page:</p>
          <div>
            <button
              disabled={page === 1}
              onClick={() => setPage((page) => page - 1)}
            >
              Prev
            </button>
            <span>{page}</span>
            <button
              disabled={page === total}
              onClick={() => setPage((page) => page + 1)}
            >
              Next
            </button>
          </div>
        </div>
        <div className="select-sort">
          <label>Sort products by: </label>
          <select onChange={(e) => setOrder(e.target.value)}>
            <option value={"asc"}>Price Low to High</option>
            <option value={"desc"}>Price High to Low</option>
          </select>
        </div>
      </div>
      <div className="products-container">
        {loading ? (
          <Box
            boxShadow="lg"
            bg="white"
            width={"90vw"}
            height="80vh"
            margin="auto"
          >
            <Box padding="6" bg="white" width={"90vw"} margin="auto">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
            <Box padding="6" bg="white" width={"90vw"} margin="auto">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
            <Box padding="6" bg="white" width={"90vw"} margin="auto">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </Box>
        ) : (
          products.map((el) => {
            const isWishlisted = wishlistedItems.find(({ id }) => el.id === id);
            if (isWishlisted)
              return (
                <ProductCard product={el} wishliststate={true} key={el.id} />
              );
            else return <ProductCard product={el} key={el.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Products;
