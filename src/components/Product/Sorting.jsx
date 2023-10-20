import React from "react";

const Sorting = () => {
  return (
    <div className="catalog__sorting sorting">
      <h2 className="sorting__text">Сортировка</h2>
      <div className="sorting__goods-container">
        <select className="sorting__goods" aria-label="Сортировка">
          <option value="sorting__default">По умолчанию</option>
          <option value="sorting__expensive">Сначала дорогие</option>
          <option value="sorting__cheap">Сначала дешёвые</option>
          <option value="sorting__expensive">Высокий рейтинг</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
