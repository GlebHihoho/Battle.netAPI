import React from 'react';
import Card  from './Card';

function CardList(props) {
  const { Basic, onClickBtn } = props;

  return (
    <div className="card-list">
      {
        !Basic
          ? <div className="loader">Loading...</div>
          : Basic.map(card => <Card key={card.cardId} card={card} clickBtn={onClickBtn} />)
      }
    </div>
  )
}

export default CardList;

