import React from "react";

const Navigation = () => {
  return (
    <div className="main-navigation header__main-navigation header__main-navigation--nojs">
      <ul className="main-navigation__list reset-default main-navigation__items">
        <li className="main-navigation__item main-navigation__item--current">
          <a
            className="site-link main-navigaion-link page-link"
            href="index.html"
          >
            Главная
          </a>
        </li>
        <li className="main-navigation__item">
          <a className="site-link main-navigaion-link page-link" href="##">
            Каталог
          </a>
        </li>
        <li className="main-navigation__item">
          <a className="site-link main-navigaion-link page-link" href="##">
            Доставка
          </a>
        </li>
        <li className="main-navigation__item">
          <a className="site-link main-navigaion-link page-link" href="##">
            О нас
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
