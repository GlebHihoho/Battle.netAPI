import React, { Component } from 'react';

function Card(props) {
  const {health, cost, name, text, img, imgGold} = props.card;
  return (
    <div className="card" >
      <div className="card__header">
        <h1 className="card__h1">{name}</h1>
        <p className="card__description">{text}</p>
        <img src={img} />
      </div>
      <div className="card__footer">
        <div className="card__health">HP {health}</div>
        <div className="card__level"> Cost {cost}</div>
      </div>
    </div>
  )
}

export default Card;
