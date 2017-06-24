import React, { Component } from 'react';

function Card(props) {
  const {health, level, name, description} = props.boss;
  return (
    <div className="card" >
      <div className="card__header">
        <h1 className="card__h1">{name}</h1>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__footer">
        <div className="card__health">HP {health}</div>
        <div className="card__level"> LVL {level}</div>
      </div>
    </div>
  )
}

export default Card;
