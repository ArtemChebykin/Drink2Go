import "./scss/style.scss";
import navigationBasket from "./img/icons/navigation-basket.svg";
import navigationStudy from "./img/icons/navigation-study.svg";
import logoIcon from "./img/logo-desktop.svg";
import decafCoffe from "./img/decaf-desktop.png";
import lavenderCoffe from "./img/lavender-desktop.png";
import espressoCoffe from "./img/espresso-desktop.png";
import FeaturesList from "./components/Features/FeaturesList";
import Navigation from "./components/Header/Navigation";

function App() {
  return (
    <div>
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
          <button
            className="burger-menu header__menu-button header__menu-button--nojs"
            type="button"
          >
            <span className="burger-menu__line"></span>
            <span className="visually-hidden">Открыть меню.</span>
          </button>
        </div>
      </div>
      <source className="slider swiper" />
      <h1 className="visually-hidden">
        Drink2Go - интернет-магазин по продаже кофейных напитков.
      </h1>
      <ul className="slider__items swiper-wrapper reset-default">
        <li className="slider__item product product--flat-white swiper-slide">
          <div className="container product__container reset-default">
            <img
              className="product__picture"
              src={decafCoffe}
              width="280"
              height="280"
              alt="Банка с кофейным напитком Декаф Флэт Уайт, 100% чистая Эфиопская арабика."
            />
            <div className="product__wrapper">
              <p className="product__subheading subheading">Новинка!</p>
              <h2 className="product__heading">Декаф Флэт Уайт</h2>
              <p className="product__description">
                Свежесваренный кофе без кофеина из&nbsp;Эфиопии
                с&nbsp;натуральным фермерским молоком&nbsp;&mdash; то, что нужно
                для&nbsp;расслабления после тяжёлого рабочего дня
              </p>
              <div className="product__actions">
                <p className="product__cost product__cost--old">295₽</p>
                <p className="product__cost">225₽</p>
                <button className="product__button button" type="button">
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="slider__item product product--lavender-latte swiper-slide reset-default">
          <div className="container product__container">
            <img
              className="product__picture"
              src={lavenderCoffe}
              width="280"
              height="280"
              alt="Банка с кофейным напитком Декаф Флэт Уайт, 100% чистая Перуанская арабика."
            />
            <div className="product__wrapper">
              <p className="product__subheading subheading">Новинка!</p>
              <h2 className="product__heading">Лавандовый Латте</h2>
              <p className="product__description">
                Невероятное сочетание перуанской высокогорной арабики c молоком
                ламы и&nbsp;лавандовым сиропом унесёт вас прямо на&nbsp;вершину
                Радужных гор
              </p>
              <div className="product__actions">
                <p className="product__cost product__cost--old">285₽</p>
                <p className="product__cost">265₽</p>
                <button className="product__button button" type="button">
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="slider__item product product--espresso swiper-slide reset-default">
          <div className="container product__container">
            <img
              className="product__picture"
              src={espressoCoffe}
              width="280"
              height="280"
              alt="Банка с кофейным напитком Декаф Флэт Уайт 100% чистая Колумбийская арабика."
            />
            <div className="product__wrapper">
              <p className="product__subheading subheading">Новинка!</p>
              <h2 className="product__heading">Тройной Эспрессо</h2>
              <p className="product__description">
                Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной
                эспрессо из&nbsp;Колумбии покажет вам, что такое настоящая
                бодрость
              </p>
              <div className="product__actions">
                <p className="product__cost product__cost--old">395₽</p>
                <p className="product__cost">375₽</p>
                <button className="product__button button" type="button">
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <FeaturesList />
      <section className="catalog">
        <div className="catalog__wrapper-container container reset-default">
          <h1 className="catalog__head subheading">Каталог</h1>
          <h2 className="catalog__subtitle subtitle">
            Каталог кофейных напитков
          </h2>
          <form
            className="catalog__form"
            action="https://echo.htmlacademy.ru/"
            method="get"
          >
            <fieldset className="order-form price catalog__price">
              <legend className="order-form__title">Цена</legend>
              <div className="price__slider">
                <span className="price__slider-toggle price__slider-toggle--min">
                  <span className="visually-hidden">
                    Изменить минимальную цену.
                  </span>
                </span>
                <span className="price__slider-range"></span>
                <span className="price__slider-line"></span>
                <span className="price__slider-toggle price__slider-toggle--max">
                  <span className="visually-hidden">
                    Изменить максимальную цену.
                  </span>
                </span>
              </div>
              <div className="price__control-container">
                <label className="sticker">
                  <input
                    className="control control--price"
                    type="number"
                    name="min-price"
                    min="0"
                    max="999"
                    placeholder="0"
                  />
                </label>
                <span className="price__divider"></span>
                <label className="sticker">
                  <input
                    className="control control--price"
                    type="number"
                    name="max-price"
                    min="0"
                    max="999"
                    value="900"
                  />
                </label>
              </div>
            </fieldset>
            <fieldset className="order-form  catalog__milk">
              <legend className="order-form__title">Наличие молока</legend>
              <label className="sticker sticker--radio">
                <input
                  className="control control--radio"
                  name="milk"
                  type="radio"
                  value="any"
                  checked
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Неважно</span>
              </label>
              <label className="sticker sticker--radio">
                <input
                  className="control control--radio"
                  name="milk"
                  type="radio"
                  value="animal"
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Только животное</span>
              </label>
              <label className="sticker sticker--radio">
                <input
                  className="control control--radio"
                  name="milk"
                  type="radio"
                  value="vegetable"
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Только растительное</span>
              </label>
              <label className="sticker sticker--radio">
                <input
                  className="control control--radio"
                  name="milk"
                  type="radio"
                  value="none"
                  disabled
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Без молока</span>
              </label>
            </fieldset>
            <fieldset className="order-form  catalog__countries">
              <legend className="order-form__title">
                Страна произрастания
              </legend>
              <label className="sticker sticker--checkbox">
                <input
                  className="control control--checkbox"
                  name="country"
                  type="checkbox"
                  value="Brazil"
                  checked
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Бразилия</span>
              </label>
              <label className="sticker sticker--checkbox">
                <input
                  className="control control--checkbox"
                  name="country"
                  type="checkbox"
                  value="Ethiopia"
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Эфиопия</span>
              </label>
              <label className="sticker sticker--checkbox">
                <input
                  className="control control--checkbox"
                  name="country"
                  type="checkbox"
                  value="Columbia"
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Колумбия</span>
              </label>
              <label className="sticker sticker--checkbox">
                <input
                  className="control control--checkbox"
                  name="country"
                  type="checkbox"
                  value="Costa-Rica"
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Коста-Рика</span>
              </label>
              <label className="sticker sticker--checkbox">
                <input
                  className="control control--checkbox"
                  name="country"
                  type="checkbox"
                  value="Peru"
                  disabled
                />
                <span className="sticker__icon"></span>
                <span className="sticker__text">Перу</span>
              </label>
            </fieldset>
            <div className="catalog__button-container">
              <button
                className="catalog__button catalog__button--submit button button--submit"
                type="submit"
              >
                Применить фильтр
              </button>
              <button
                className="catalog__button catalog__button--reset button button--reset"
                type="reset"
              >
                Сбросить фильтр
              </button>
            </div>
          </form>
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
          <ul className="catalog__list reset-default">
            <li className="catalog__item product-card">
              <a className="product-card__image-link" href="##">
                <picture className="product-card__image">
                  <source
                    type="image/webp"
                    srcset="img/product-sixth.webp 1x, img/product-sixth2x.webp 2x"
                  />
                  <img
                    src="img/product-sixth.png"
                    srcset="img/product-sixth2x.png 2x"
                    width="130"
                    height="188"
                    alt="Кофейный напиток Декаф Флэт Уайт."
                  />
                </picture>
              </a>
              <h3 className="product-card__title">
                <a className="product-card__link page-link" href="##">
                  Декаф Флэт Уайт
                </a>
              </h3>
              <p className="product-card__description">
                Кофе без кофеина из&nbsp;Эфиопии с&nbsp;натуральным фермерским
                молоком
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
                <picture className="product-card__image">
                  <source
                    type="image/webp"
                    srcset="img/product-sixth.webp 1x, img/product-sixth2x.webp 2x"
                  />
                  <img
                    src="img/product-sixth.png"
                    srcset="img/product-sixth2x.png 2x"
                    width="130"
                    height="188"
                    alt="Кофейный напиток Декаф Флэт Уайт."
                  />
                </picture>
              </a>
              <h3 className="product-card__title">
                <a className="product-card__link page-link" href="##">
                  Декаф Флэт Уайт
                </a>
              </h3>
              <p className="product-card__description">
                Кофе без кофеина из&nbsp;Эфиопии с&nbsp;натуральным фермерским
                молоком
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
                <picture className="product-card__image">
                  <source
                    type="image/webp"
                    srcset="img/product-sixth.webp 1x, img/product-sixth2x.webp 2x"
                  />
                  <img
                    src="img/product-sixth.png"
                    srcset="img/product-sixth2x.png 2x"
                    width="130"
                    height="188"
                    alt="Кофейный напиток Декаф Флэт Уайт."
                  />
                </picture>
              </a>
              <h3 className="product-card__title">
                <a className="product-card__link page-link" href="##">
                  Декаф Флэт Уайт
                </a>
              </h3>
              <p className="product-card__description">
                Кофе без кофеина из&nbsp;Эфиопии с&nbsp;натуральным фермерским
                молоком
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
                <picture className="product-card__image">
                  <source
                    type="image/webp"
                    srcset="img/product-sixth.webp 1x, img/product-sixth2x.webp 2x"
                  />
                  <img
                    src="img/product-sixth.png"
                    srcset="img/product-sixth2x.png 2x"
                    width="130"
                    height="188"
                    alt="Кофейный напиток Декаф Флэт Уайт."
                  />
                </picture>
              </a>
              <h3 className="product-card__title">
                <a className="product-card__link page-link" href="##">
                  Декаф Флэт Уайт
                </a>
              </h3>
              <p className="product-card__description">
                Кофе без кофеина из&nbsp;Эфиопии с&nbsp;натуральным фермерским
                молоком
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
                <picture className="product-card__image">
                  <source
                    type="image/webp"
                    srcset="img/product-sixth.webp 1x, img/product-sixth2x.webp 2x"
                  />
                  <img
                    src="img/product-sixth.png"
                    srcset="img/product-sixth2x.png 2x"
                    width="130"
                    height="188"
                    alt="Кофейный напиток Декаф Флэт Уайт."
                  />
                </picture>
              </a>
              <h3 className="product-card__title">
                <a className="product-card__link page-link" href="##">
                  Декаф Флэт Уайт
                </a>
              </h3>
              <p className="product-card__description">
                Кофе без кофеина из&nbsp;Эфиопии с&nbsp;натуральным фермерским
                молоком
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
                <picture className="product-card__image">
                  <source
                    type="image/webp"
                    srcset="img/product-sixth.webp 1x, img/product-sixth2x.webp 2x"
                  />
                  <img
                    src="img/product-sixth.png"
                    srcset="img/product-sixth2x.png 2x"
                    width="130"
                    height="188"
                    alt="Кофейный напиток Декаф Флэт Уайт."
                  />
                </picture>
              </a>
              <h3 className="product-card__title">
                <a className="product-card__link page-link" href="##">
                  Декаф Флэт Уайт
                </a>
              </h3>
              <p className="product-card__description">
                Кофе без кофеина из&nbsp;Эфиопии с&nbsp;натуральным фермерским
                молоком
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
        </div>
      </section>
      <div className="main-footer container">
        <div className="main-footer__wrapper reset-default">
          <div className="main-footer__social-list social-list">
            <div className="main-footer-container">
              <a
                className="main-footer__image logo page-link"
                href="index.html"
              >
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcset="img/logo-desktop.svg"
                  />
                  <img
                    className="main-footer__image-logo"
                    src="img/logo-tablet.svg"
                    width="82"
                    height="36"
                    alt="Логотип интернет-магазина Drink2Go."
                  />
                </picture>
              </a>
              <span className="main-footer__description logo-description">
                Интернет-магазин кофейных напитков
              </span>
            </div>
            <ul className="social-list__media reset-default">
              <li className="social-list__item social-list__item--vkontakte">
                <a className="social-list__link page-link" href="##">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="20"
                    height="20"
                  >
                    <use href="img/icons/stack.svg#vk"></use>
                  </svg>
                  <span className="visually-hidden">Вконтакте.</span>
                </a>
              </li>
              <li className="social-list__item social-list__item--pinterest">
                <a className="social-list__link page-link" href="##">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="22"
                    height="22"
                  >
                    <use href="img/icons/stack.svg#pinterest"></use>
                  </svg>
                  <span className="visually-hidden">Пинтерест.</span>
                </a>
              </li>
              <li className="social-list__item social-list__item--ok">
                <a className="social-list__link page-link" href="##">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="20"
                    height="20"
                  >
                    <use href="img/icons/stack.svg#ok"></use>
                  </svg>
                  <span className="visually-hidden">Одноклассники.</span>
                </a>
              </li>
            </ul>
          </div>
          <nav className="transition main-footer-transition">
            <h3 className="main-footer-title">Интернет-магазин</h3>
            <ul className="main-footer__list reset-default">
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  Каталог
                </a>
              </li>
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  Доставка
                </a>
              </li>
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  Способ оплаты
                </a>
              </li>
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  О нас
                </a>
              </li>
            </ul>
          </nav>
          <nav className="transition main-footer-transition">
            <h3 className="main-footer-title">Медиа</h3>
            <ul className="main-footer__list reset-default">
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  Блог
                </a>
              </li>
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  Информация для СМИ
                </a>
              </li>
              <li className="transition__link-item main-footer__link-item">
                <a
                  className="transition__link main-footer-transition-link page-link"
                  href="##"
                >
                  Правовая информация
                </a>
              </li>
            </ul>
          </nav>
          <div className="main-footer__contacts">
            <h4 className="main-footer__address-heading">Контакты</h4>
            <address className="main-footer__address">
              <span className="main-footer__location">
                Санкт-Петербург, набережная реки Карповки, дом&nbsp;5
              </span>
              <a
                className="main-footer__phone page-link"
                href="tel:+79999999999"
              >
                +7 (999) 999-99-99
              </a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
