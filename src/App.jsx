import React      from 'react';
import ReactDOM   from 'react-dom';
import axios      from 'axios';

import CardList   from './components/CardList';
import SearchBar  from './components/SearchBar';

const cardUrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards';
const headers = { "X-Mashape-Key" : "ZDXXrbn7fhmshIHGnLYdPiKozzLGp1rFAPujsns0ULQjtcrmpJ" };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards : '',
      allCards : ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value.toLowerCase();

    const newCards = this.state.allCards.filter(card => card.name.toLowerCase().includes(value));

    this.setState({
      cards : newCards,
    })
  }

  componentDidMount() {
    axios.get(cardUrl, { headers })
          .then(res => res.data)
          .then(res => this.setState({
            cards: res.Basic,
            allCards: res.Basic
          }))
  }

  render() {
    return (
      <div>
        <SearchBar onStatusChange={this.handleChange} />
        <CardList Basic={this.state.cards} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
