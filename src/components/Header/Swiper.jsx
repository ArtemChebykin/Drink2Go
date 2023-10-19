import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import { Navigation } from "swiper/modules";

import decafCoffe from "../../img/decaf-desktop.png";
import lavenderCoffe from "../../img/lavender-desktop.png";
import espressoCoffe from "../../img/espresso-desktop.png";

const SwiperItem = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper slider__items reset-default"
    >
      <SwiperSlide className="slider__item product product--flat-white swiper-slide">
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
              Свежесваренный кофе без кофеина из Эфиопии с натуральным
              фермерским молоком то, что нужно для расслабления после тяжёлого
              рабочего дня
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
      </SwiperSlide>
      <SwiperSlide className="slider__item product product--lavender-latte swiper-slide reset-default">
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
              ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор
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
      </SwiperSlide>
      <SwiperSlide className="slider__item product product--espresso swiper-slide reset-default">
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
              эспрессо из Колумбии покажет вам, что такое настоящая бодрость
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
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperItem;
