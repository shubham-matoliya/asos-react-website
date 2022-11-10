import React from "react";
import "./Slider.css";
const ImageSlider = ({ images }) => {
  // var counter = 1;
  // setInterval(function () {
  //   document.getElementById("radio" + counter).checked = true;
  //   counter++;
  //   if (counter > 4) {
  //     counter = 1;
  //   }
  // }, 3000);
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slides">
          {/* <!--radio buttons start--> */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* <!--radio buttons end-->
        <!--slide images start--> */}
          <div className="slide first">
            <img src={images.image1} alt="" />
          </div>
          <div className="slide">
            <img src={images.image2} alt="" />
          </div>
          <div className="slide">
            <img src={images.image3} alt="" />
          </div>
          <div className="slide">
            <img src={images.image4} alt="" />
          </div>
          {/* <!--slide images end--> */}
          {/* <!--automatic navigation start--> */}
          <div class="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          {/* <!--automatic navigation end--> */}
        </div>
        {/* <!--manual navigation start--> */}
        <div className="navigation-manual">
          <label for="radio1" className="manual-btn"></label>
          <label for="radio2" className="manual-btn"></label>
          <label for="radio3" className="manual-btn"></label>
          <label for="radio4" className="manual-btn"></label>
        </div>
        {/* <!--manual navigation end--> */}
      </div>
    </div>
  );
};

export default ImageSlider;
