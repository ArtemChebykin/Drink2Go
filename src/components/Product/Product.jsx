import React from "react";
import Pagination from "../Pagination/Pagination";
import ProductList from "./ProductList";
import Form from "./Form";
import Sorting from "./Sorting";

const Product = () => {
  return (
    <div className="catalog">
      <div className="catalog__wrapper-container container reset-default">
        <h1 className="catalog__head subheading">Каталог</h1>
        <h2 className="catalog__subtitle subtitle">
          Каталог кофейных напитков
        </h2>
        <Form />
        <Sorting />
        <ProductList />
        <Pagination />
      </div>
    </div>
  );
};

export default Product;
