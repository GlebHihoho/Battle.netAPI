import React from 'react';

function CardDescription(props) {
  const {name, attack, health, faction, cost, playerClass, rapity, type, howToGetGold, cardSet, dbfId} = props.cardProps;

  const listItem = [
    {
      title : 'Имя',
      value : name
    },
    {
      title : 'Атака',
      value : attack
    },
    {
      title : 'Жизни',
      value : health
    },
    {
      title : 'Фракция',
      value : faction
    },
    {
      title : 'Стоимость',
      value : cost
    },
    {
      title : 'Класс',
      value : playerClass
    },
    {
      title : 'Редкость',
      value : rapity
    },
    {
      title : 'Тип',
      value : type
    },
    {
      title : 'Набор',
      value : cardSet
    }
  ];

  return (
    <ul className="card__list" >
      {
        listItem.map(element => {
          return element.value
            ?  <li className="card__item" >{element.title}: {element.value}</li>
            : null;
        })
      }
    </ul>
  )
}

export default CardDescription;
