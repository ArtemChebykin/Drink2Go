const Form = () => {
  return (
    <form className="catalog__form">
      <fieldset className="order-form price catalog__price">
        <legend className="order-form__title">Цена</legend>
        <div className="price__slider">
          <span className="price__slider-toggle price__slider-toggle--min">
            <span className="visually-hidden">Изменить минимальную цену.</span>
          </span>
          <span className="price__slider-range"></span>
          <span className="price__slider-line"></span>
          <span className="price__slider-toggle price__slider-toggle--max">
            <span className="visually-hidden">Изменить максимальную цену.</span>
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
        <legend className="order-form__title">Страна произрастания</legend>
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
  );
};

export default Form;
