import React from "react";
import SwiperItem from "../components/Swiper/Swiper";
import Features from "../components/Features/Features";
import Product from "../components/Product/Product";

const Home = ({ searchValue }) => {
  return (
    <>
      <SwiperItem />
      <Features />
      <Product />
    </>
  );
};

export default Home;
