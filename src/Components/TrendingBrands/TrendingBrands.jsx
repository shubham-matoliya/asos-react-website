import React from "react";
import "./TrendingBrands.css";
const TrendingBrands = () => {
  const brandImages = [
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg",
    },
  ];
  return (
    <>
      <h1 id="brand-heading">Trending Brands</h1>
      <div className="TrendingBrands-container">
        {brandImages.map((el) => (
          <div>
            <img src={el.img} alt="Brand" />
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingBrands;
