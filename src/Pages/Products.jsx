import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ProductCard from "../Components/ProductCard/ProductCard";
import "./Products.css";

import { useToast } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContext";
import { useParams } from "react-router-dom";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
const Products = () => {
  const { category } = useParams();
  console.log("category is,", category);
  const toast = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("asc");
  const [total, setTotal] = useState(0);
  const { wishlistedItems, localData, addProductsToLocalStorage } =
    useContext(CartContext);

  clearInterval(+localStorage.getItem("setIntervalID"));

  //firebase
  const productsItemsCollectionRef = collection(db, "products");
  const getProducts = async (page = 1, limit = 10, order) => {
    try {
      if (!localData) {
        const data = await getDocs(productsItemsCollectionRef);
        const datareceived = data.docs.map((el) => ({
          ...el.data(),
          id: el.id,
        }));

        addProductsToLocalStorage(datareceived);
        console.log("inside fetching loop");
      } else {
        // console.log("data received after getting is", localData);
        setTotal(Math.ceil(localData.length / limit));
        let newData, sortedData;
        if (category) {
          const filteredData = localData.filter((el) => {
            return el.category === category;
          });
          console.log("filtered data is ", filteredData);
          setTotal(Math.ceil(filteredData.length / limit));
          if (order === "asc") {
            sortedData = filteredData.sort((a, b) => a.price - b.price);
            newData = sortedData.splice(limit * (page - 1), limit);
          } else if (order === "desc") {
            sortedData = filteredData.sort((a, b) => b.price - a.price);
            newData = sortedData.splice(limit * (page - 1), limit);
          } else newData = [...filteredData];
        } else {
          if (order === "asc") {
            sortedData = localData.sort((a, b) => a.price - b.price);
            newData = sortedData.splice(limit * (page - 1), limit);
          } else if (order === "desc") {
            sortedData = localData.sort((a, b) => b.price - a.price);
            newData = sortedData.splice(limit * (page - 1), limit);
          } else newData = localData.splice(limit * (page - 1), limit);
        }
        setProducts([...newData]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(page, limit, order);
  }, [page, limit, order, localData, category]);
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
              disabled={page <= 1}
              onClick={() => setPage((page) => page - 1)}
            >
              Prev
            </button>
            <span>{`${page} of ${total}`}</span>
            <button
              disabled={page >= total}
              onClick={() => setPage((page) => page + 1)}
            >
              Next
            </button>
          </div>
        </div>
        <div className="select-sort">
          <label>Sort products by: </label>
          <select onChange={(e) => setOrder(e.target.value)}>
            <option value={""}>Sort by price:--</option>
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
