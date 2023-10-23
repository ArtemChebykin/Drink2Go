import React from "react";
import SwiperItem from "../components/Swiper/Swiper";
import Features from "../components/Features/Features";
import ProductList from "../components/Product/ProductList";

const Home = ({ searchValue }) => {
  return (
    <>
      <SwiperItem />
      <Features />
      <ProductList />
    </>
  );
};

export default Home;
