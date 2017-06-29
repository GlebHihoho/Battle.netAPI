import React, { Component } from 'react';
import axios    from 'axios';

import Card from './Card';

const cardUrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards';
const headers = { "X-Mashape-Key" : "ZDXXrbn7fhmshIHGnLYdPiKozzLGp1rFAPujsns0ULQjtcrmpJ" }

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Basic : ''
    }
  }

  componentDidMount() {
    axios.get(cardUrl, { headers })
          .then(res => res.data)
          .then(res => this.setState({
            Basic : res.Basic
          }))
  }

  render() {
    console.log(this.state.Basic);

    return (
      <div className="card-list">

        {
          !this.state.Basic
            ? <div className="loader">Loading...</div>
            : this.state.Basic.map(card => <Card key={card.cardId} card={card}/>)
        }
      </div>
    )
  }
}

export default CardList;

