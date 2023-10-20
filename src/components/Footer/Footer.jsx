import logoFooter from "../../img/logo-footer.svg";
import iconVk from "../../img/icons/vk.svg";
import iconPin from "../../img/icons/pinterest.svg";
import iconOk from "../../img/icons/ok.svg";

const Footer = () => {
  return (
    <div className="main-footer container">
      <div className="main-footer__wrapper reset-default">
        <div className="main-footer__social-list social-list">
          <div className="main-footer-container">
            <a className="main-footer__image logo page-link" href="index.html">
              <img
                className="main-footer__image-logo"
                src={logoFooter}
                width="82"
                height="36"
                alt="Логотип интернет-магазина Drink2Go."
              />
            </a>
            <span className="main-footer__description logo-description">
              Интернет-магазин кофейных напитков
            </span>
          </div>
          <ul className="social-list__media reset-default">
            <li className="social-list__item social-list__item--vkontakte">
              <a className="social-list__link page-link" href="##">
                <img
                  src={iconVk}
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  alt="Вконтакте"
                />
                <span className="visually-hidden">Вконтакте.</span>
              </a>
            </li>
            <li className="social-list__item social-list__item--pinterest">
              <a className="social-list__link page-link" href="##">
                <img
                  src={iconPin}
                  aria-hidden="true"
                  focusable="false"
                  width="22"
                  height="22"
                  alt="Пинтерест"
                />
                <span className="visually-hidden">Пинтерест.</span>
              </a>
            </li>
            <li className="social-list__item social-list__item--ok">
              <a className="social-list__link page-link" href="##">
                <img
                  src={iconOk}
                  aria-hidden="true"
                  focusable="false"
                  width="20"
                  height="20"
                  alt="Одноклассники"
                />
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
              Санкт-Петербург, набережная реки Карповки, дом 5
            </span>
            <a className="main-footer__phone page-link" href="tel:+79999999999">
              +7 (999) 999-99-99
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
