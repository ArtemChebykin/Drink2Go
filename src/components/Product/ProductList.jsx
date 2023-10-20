import ProductFirst from "../../img/product-first.png";
import ProductSecond from "../../img/product-second.png";
import ProductThird from "../../img/product-third.png";
import ProductFourth from "../../img/product-fourth.png";
import ProductFifth from "../../img/product-fifth.png";
import ProductSixth from "../../img/product-sixth.png";

const ProductList = () => {
  return (
    <ul className="catalog__list reset-default">
      <li className="catalog__item product-card">
        <a className="product-card__image-link" href="##">
          <img
            className="product-card__image"
            src={ProductFirst}
            width="130"
            height="188"
            alt="Кофейный напиток Декаф Флэт Уайт."
          />
        </a>
        <h3 className="product-card__title">
          <a className="product-card__link page-link" href="##">
            Декаф Флэт Уайт
          </a>
        </h3>
        <p className="product-card__description">
          Кофе без кофеина из Эфиопии с натуральным фермерским молоком
        </p>
        <div className="catalog__wrapper">
          <span className="product-card__price">225₽</span>
          <button
            className="product-card__button button button--basket"
            type="button"
          >
            В корзину
          </button>
        </div>
      </li>
      <li className="catalog__item product-card">
        <a className="product-card__image-link" href="##">
          <img
            className="product-card__image"
            src={ProductSecond}
            width="130"
            height="188"
            alt="Кофейный напиток Декаф Флэт Уайт."
          />
        </a>
        <h3 className="product-card__title">
          <a className="product-card__link page-link" href="##">
            Декаф Флэт Уайт
          </a>
        </h3>
        <p className="product-card__description">
          Кофе без кофеина из Эфиопии с натуральным фермерским молоком
        </p>
        <div className="catalog__wrapper">
          <span className="product-card__price">225₽</span>
          <button
            className="product-card__button button button--basket"
            type="button"
          >
            В корзину
          </button>
        </div>
      </li>
      <li className="catalog__item product-card">
        <a className="product-card__image-link page-link" href="##">
          <img
            className="product-card__image"
            src={ProductThird}
            width="130"
            height="188"
            alt="Кофейный напиток Декаф Флэт Уайт."
          />
        </a>
        <h3 className="product-card__title">
          <a className="product-card__link page-link" href="##">
            Декаф Флэт Уайт
          </a>
        </h3>
        <p className="product-card__description">
          Кофе без кофеина из Эфиопии с натуральным фермерским молоком
        </p>
        <div className="catalog__wrapper">
          <span className="product-card__price">225₽</span>
          <button
            className="product-card__button button button--basket"
            type="button"
          >
            В корзину
          </button>
        </div>
      </li>
      <li className="catalog__item product-card">
        <a className="product-card__image-link" href="##">
          <img
            className="product-card__image"
            src={ProductFourth}
            width="130"
            height="188"
            alt="Кофейный напиток Декаф Флэт Уайт."
          />
        </a>
        <h3 className="product-card__title">
          <a className="product-card__link page-link" href="##">
            Декаф Флэт Уайт
          </a>
        </h3>
        <p className="product-card__description">
          Кофе без кофеина из Эфиопии с натуральным фермерским молоком
        </p>
        <div className="catalog__wrapper">
          <span className="product-card__price">225₽</span>
          <button
            className="product-card__button button button--basket"
            type="button"
          >
            В корзину
          </button>
        </div>
      </li>
      <li className="catalog__item product-card">
        <a className="product-card__image-link" href="##">
          <img
            className="product-card__image"
            src={ProductFifth}
            width="130"
            height="188"
            alt="Кофейный напиток Декаф Флэт Уайт."
          />
        </a>
        <h3 className="product-card__title">
          <a className="product-card__link page-link" href="##">
            Декаф Флэт Уайт
          </a>
        </h3>
        <p className="product-card__description">
          Кофе без кофеина из Эфиопии с натуральным фермерским молоком
        </p>
        <div className="catalog__wrapper">
          <span className="product-card__price">225₽</span>
          <button
            className="product-card__button button button--basket"
            type="button"
          >
            В корзину
          </button>
        </div>
      </li>
      <li className="catalog__item product-card">
        <a className="product-card__image-link" href="##">
          <img
            className="product-card__image"
            src={ProductSixth}
            width="130"
            height="188"
            alt="Кофейный напиток Декаф Флэт Уайт."
          />
        </a>
        <h3 className="product-card__title">
          <a className="product-card__link page-link" href="##">
            Декаф Флэт Уайт
          </a>
        </h3>
        <p className="product-card__description">
          Кофе без кофеина из Эфиопии с натуральным фермерским молоком
        </p>
        <div className="catalog__wrapper">
          <span className="product-card__price">225₽</span>
          <button
            className="product-card__button button button--basket"
            type="button"
          >
            В корзину
          </button>
        </div>
      </li>
    </ul>
  );
};

export default ProductList;
