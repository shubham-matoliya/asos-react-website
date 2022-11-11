import React from "react";
import { Link } from "react-router-dom";
import "./DualCard.css";
const DualCard = () => {
  const cardContent = [
    {
      image:
        "https://images.asos-media.com/products/the-north-face-sheru-jacket-in-beige/201894399-1-beige?$n_640w$&wid=634&fit=constrain",
      title: "treat yo'self brands",
      subtitle: "coz you deserve the best",
      btnText: "shop now",
    },
    {
      image:
        "https://images.asos-media.com/products/collusion-unisex-joggers-in-stone/202525395-1-stone?$n_640w$&wid=634&fit=constrain",
      title: "collusion",
      subtitle: "shop: the club in 1062",
      btnText: "shop the brand",
    },
  ];
  return (
    <div className="dualcard-container">
      {cardContent.map((el) => (
        <div>
          <div>
            <Link to={"/singleproducts"}>
              <img src={el.image} />
            </Link>
          </div>
          <h1>{el.title}</h1>
          <p>{el.subtitle}</p>
          <button>{el.btnText}</button>
        </div>
      ))}
    </div>
  );
};

export default DualCard;
