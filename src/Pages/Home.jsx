import { Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import image1 from "../Assets/homepage-banner.png";
import image2 from "../Assets/fashion-banner.jpeg";
import image3 from "../Assets/fashion-new-banner.jpeg";
import image4 from "../Assets/summer-sale-banner.jpeg";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import DisplayCard from "../Components/CardDisplay/DisplayCard";
import AdsStripe from "../Components/AdsStripe/AdsStripe";
import DualCard from "../Components/DualCard/DualCard";
import TrendingBrands from "../Components/TrendingBrands/TrendingBrands";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const images = { image1, image2, image3, image4 };
  const Authentication = useContext(AuthContext);
  const { user, logOut } = Authentication;
  console.log(user);
  if (user) console.log("user is ", user.uid, user.email);
  const cardDetails = [
    {
      image:
        "https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---self-care.jpg",
      title: "self-care moments",
      subtitle: "It's treat-yourself time",
    },
    {
      image:
        "https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---label-love.jpg",
      title: "label love",
      subtitle: "nike, addidas and more!",
    },
    {
      image:
        "https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg",
      title: "in-house brands",
      subtitle: "relationship status: exclusive",
    },
    {
      image:
        "https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg",
      title: "go for glam",
      subtitle: "swipe right on these",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="home">
        <ImageSlider images={images} />
        <DisplayCard cardDetails={cardDetails} />
        <AdsStripe />
        <DualCard />
        <TrendingBrands />
        <Footer />
      </div>
    </>
  );
};

export default Home;
