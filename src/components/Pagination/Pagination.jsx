import React from "react";

const Pagination = () => {
  return (
    <div className="catalog__navigation navigation">
      <a
        className="navigation__link navigation__link--prev page-link"
        href="##"
      >
        <span className="navigation__arrow navigation__arrow--left"></span>
        <span className="visually-hidden">Предыдущая страница.</span>
        <span className="visual-tablet">Назад</span>
      </a>
      <ol className="navigation__list reset-default">
        <li className="navigation__item">
          <a className="navigation__link page-link" href="##">
            1
          </a>
        </li>
        <li className="navigation__item">
          <a
            className="navigation__link navigation__link--flow page-link"
            href="##"
          >
            2
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link page-link" href="##">
            3
          </a>
        </li>
      </ol>
      <a
        className="navigation__link navigation__link--next page-link"
        href="##"
      >
        <span className="navigation__arrow navigation__arrow--right"></span>
        <span className="visually-hidden">Следующая страница.</span>
        <span className="visual-tablet">Вперед</span>
      </a>
    </div>
  );
};

export default Pagination;
