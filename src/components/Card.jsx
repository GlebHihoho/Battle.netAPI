import React from 'react';

import CardDescription from './CardDescription';

function Card(props) {
  const {name, attack, health, faction, cost, playerClass, rapity, type, howToGetGold, cardSet, img, dbfId} = props.card;

  const valueInCardDescription = {
    name, attack, health, faction, cost, playerClass, rapity, type, howToGetGold, cardSet, dbfId
  }

  if (!img) {
    return null;
  }

  return (
    <div className="card" >
      <div className="card__description">
        <CardDescription cardProps={valueInCardDescription} />
      </div>
      <img className="card__image" src={img} alt="" width="337" height="465" />
    </div>
  )
}

export default Card;
