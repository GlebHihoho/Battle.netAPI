import React from 'react';
import Card  from './Card';

function CardList(props) {
  const { Basic } = props;

  return (
    <div className="card-list">
      {
        !Basic
          ? <div className="loader">Loading...</div>
          : Basic.map(card => <Card key={card.cardId} card={card}/>)
      }
    </div>
  )
}

export default CardList;

