import React from "react";
import navigationBasket from "../../img/icons/navigation-basket.svg";
import navigationStudy from "../../img/icons/navigation-study.svg";

const Private = () => {
  return (
    <nav className="private-navigation header__private-navigation">
      <ul className="private-navigation__list private-navigation__items reset-default">
        <li className="private-navigation__item">
          <a className="private-navigation__link page-link" href="##">
            <img
              className="private-navigation__login-icon"
              src={navigationStudy}
              alt="Личный кабинет"
            />
            <span className="visually-hidden">Личный кабинет</span>
            <span className="visual-desktop">Войти</span>
          </a>
        </li>
        <li className="private-navigation__item">
          <a className="private-navigation__link page-link" href="##">
            <img
              className="private-navigation__login-icon"
              src={navigationBasket}
              alt="Корзина"
            />
            <span className="visually-hidden">Корзина</span>
            <span className="visual-desktop">Корзина</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Private;
