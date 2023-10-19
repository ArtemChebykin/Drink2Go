import React from "react";

const FeatureItem = () => {
  // const list = [
  //   { title: "Скорость", subtitle: "Готовый напиток всегда под рукой просто открой банку" },
  //   { title: "Удобство", subtitle: "Легко помещается и в карман, и в маленькую сумочку" },
  //   { title: "Бодрость", subtitle: "Сбалансированная доза кофеина даст мощный заряд энергии" },
  //   { title: "Экологичность", subtitle: "Вся упаковка сделана из перерабатываемых материалов" },
  // ];

  return (
    <>
      <ul className="features__list reset-default">
        <li className="features__item features__item--speed">
          <h2 className="features__title">Скорость</h2>
          <p className="features__text">
            Готовый напиток всегда под рукой просто открой банку
          </p>
        </li>
        <li className="features__item features__item--commfort">
          <h2 className="features__title">Удобство</h2>
          <p className="features__text">
            Легко помещается и в карман, и в маленькую сумочку
          </p>
        </li>
        <li className="features__item features__item--courage">
          <h2 className="features__title">Бодрость</h2>
          <p className="features__text">
            Сбалансированная доза кофеина даст мощный заряд энергии
          </p>
        </li>
        <li className="features__item features__item--ecology">
          <h2 className="features__title">Экологичность</h2>
          <p className="features__text">
            Вся упаковка сделана из перерабатываемых материалов
          </p>
        </li>
      </ul>
    </>
  );
};

export default FeatureItem;
