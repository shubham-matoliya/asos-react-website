import { Center, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { CartContext } from "../Context/CartContext/CartContext";
import "./SingleProduct.css";
import { useToast } from "@chakra-ui/react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { Spinner } from "@chakra-ui/react";
const SingleProduct = () => {
  const toast = useToast();
  const { id, category } = useParams();
  // const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const { addSingleItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  clearInterval(+localStorage.getItem("setIntervalID"));
  const productsItemsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsItemsCollectionRef);
    try {
      const datareceived = data.docs.map((el) => ({
        ...el.data(),
        id: el.id,
      }));
      // console.log("data received after getting is", datareceived);
      let itemreceived = datareceived.filter((el) => {
        return el.id === id && el.category === category;
      });
      console.log("itemreceived is ", itemreceived);
      if (itemreceived.length)
        setProduct({ ...itemreceived[0], size: "XS", quantity: 1 });
      else setError("No Item found ☹️");
    } catch (error) {
      setError(error.message);
    }
  };
  console.log("error is ", error);
  useEffect(() => {
    getProducts();
  }, []);
  console.log("product is ", product);

  return (
    <>
      <Navbar />
      {product && !error ? (
        <div className="singleproduct" id={product.id}>
          <div>
          <span className="productID">{product.id}</span>
            <img
              className="inImage"
              src={product.inImage}
              alt={product.cardDetails}
            />
            <img
              className="outImage"
              src={product.outImage}
              alt={product.cardDetails}
            />
          </div>
          <div>
            <div>
              <h2>{product.cardDetails}</h2>
            </div>
            <div>
              <p>
                <span>
                  <b>Price: $</b>
                </span>
                <span className="price">{product.price}</span>
              </p>
            </div>
            <div>
              <p>
                <b>Category:</b> {product.category}
              </p>
            </div>

            <p>
              <b>Select size*</b>
            </p>
            <div
              className="size"
              onChange={(e) => setProduct({ ...product, size: e.target.value })}
            >
              <input type="radio" id="size-xs" name="Size" value={"XS"} />
              <label htmlFor="size-xs">
                <span>XS</span>
              </label>

              <input type="radio" id="size-s" name="Size" value={"S"} />
              <label htmlFor="size-s">
                <span>S</span>
              </label>

              <input type="radio" id="size-m" name="Size" value={"M"} />
              <label htmlFor="size-m">
                <span>M</span>
              </label>

              <input type="radio" id="size-l" name="Size" value={"L"} />
              <label htmlFor="size-l">
                <span>L</span>
              </label>

              <input type="radio" id="size-xl" name="Size" value={"XL"} />
              <label htmlFor="size-xl">
                <span>XL</span>
              </label>
            </div>

            <div className="quantity">
              <p>
                <b>Quantity*</b>
              </p>
              <select
                name=""
                id="qty"
                onChange={(e) =>
                  setProduct({ ...product, quantity: +e.target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <span>
                <button
                  className="add-to-basket"
                  onClick={() => {
                    addSingleItemToCart(product);
                    toast({
                      title: `Item added to cart`,
                      status: "info",
                      isClosable: true,
                      position: "top",
                      duration: 3000,
                    });
                  }}
                >
                  ADD TO BASKET
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Center size={"2xl"} margin="15%" textAlign={"center"}>
          {!error ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <Heading>{error}</Heading>
          )}
        </Center>
      )}
    </>
  );
};

export default SingleProduct;
