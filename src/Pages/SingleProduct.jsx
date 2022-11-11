import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./SingleProduct.css";
const SingleProduct = () => {
  return (
    <>
      <Navbar />

      <div className="singleproduct">
        <div>
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/4130652010050_079_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080"
            alt=""
          />
        </div>
        <div>
          <div>
            <h2>Maeve Strapless Mini Dress</h2>
          </div>
          <div>
            <p>
              <span>$</span>
              <span className="price">170.00</span>
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
          <div className="size">
            <input type="radio" id="size-xs" name="Size" />
            <label for="size-xs">
              <span>XS</span>
            </label>

            <input type="radio" id="size-s" name="Size" />
            <label for="size-s">
              <span>S</span>
            </label>

            <input type="radio" id="size-m" name="Size" />
            <label for="size-m">
              <span>M</span>
            </label>

            <input type="radio" id="size-l" name="Size" />
            <label for="size-l">
              <span>L</span>
            </label>

            <input type="radio" id="size-xl" name="Size" />
            <label for="size-xl">
              <span>XL</span>
            </label>
          </div>

          <div className="quantity">
            <p>
              <b>Quantity*</b>
            </p>
            <select name="" id="qty">
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
              <button className="add-to-basket">ADD TO BASKET</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
