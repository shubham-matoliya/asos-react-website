import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { CartContext } from "../Context/CartContext/CartContext";
import "./SingleProduct.css";
import { useToast } from "@chakra-ui/react";
const SingleProduct = () => {
  const toast = useToast();
  const { id, category } = useParams();
  const [item, setItem] = useState(null);
  const { addSingleItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  // console.log(id);
  useEffect(() => {
    axios(`http://localhost:8080/${category}/${id}`).then((res) => {
      // console.log("data retrieve is ", res.data);
      setItem({ ...res.data });
      setProduct({ ...res.data, size: "XS", quantity: 1 });
    });
  }, []);
  // console.log("product is ", product);

  return (
    <>
      <Navbar />
      {item ? (
        <div className="singleproduct" id={item.id}>
          <div>
            <img
              className="inImage"
              src={item.inImage}
              alt={item.cardDetails}
            />
            <img
              className="outImage"
              src={item.outImage}
              alt={item.cardDetails}
            />
          </div>
          <div>
            <div>
              <h2>{item.cardDetails}</h2>
            </div>
            <div>
              <p>
                <span>
                  <b>Price: $</b>
                </span>
                <span className="price">{item.price}</span>
              </p>
            </div>
            <div>
              <p>
                <b>color:</b> Yellow
              </p>
              <span id="productid">2</span>
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
                  setProduct({ ...product, quantity: e.target.value })
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
        <Heading size={"2xl"} margin="15%" textAlign={"center"}>
          Error! No item Found ☹️
        </Heading>
      )}
    </>
  );
};

export default SingleProduct;
