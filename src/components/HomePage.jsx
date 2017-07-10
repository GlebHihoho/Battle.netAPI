import React from 'react';

import Select from './Select'

function HomePage(props) {
  const { sets } = props;

  // console.log(sets)

  return (
    <div className="home-page">
      <img className="home-page__logo" src="img/hearthstone-logo.png" alt="Логотип" width="256" height="256"/>

      <form className="home-page__form">
        <label className="home-page__header" htmlFor="1">Выберите комплект карт</label>
        <Select sets={sets} />
        <input className="home-page__button" type="submit" value="Показать"/>
      </form>


    </div>
  );
}

export default HomePage;
