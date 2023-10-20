import React from "react";
import logoIcon from "../../img/logo-desktop.svg";
import Navigation from "./Navigation";
import Private from "./Private";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header__container">
          <div className="header__page">
            <a
              className="header__page-logo page-link"
              href="index.html"
              aria-label="Интернет-магазин по продаже кофейных напитков."
            >
              <img
                className="header__logo-image"
                src={logoIcon}
                width="32"
                height="36"
                alt="Логотип интернет-магазина Drink2Go."
              />
            </a>
            <span className="header__logo-description logo-description">
              Интернет-магазин кофейных напитков
            </span>
          </div>
          <Navigation />
          <Private />
        </div>
      </div>
    </>
  );
};

export default Header;
