import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import EditCard from './components/EditCard';
import HomePage from './components/HomePage';

import { headers, SETS_URL, CARD_URL } from './constants/url';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: [],
      cards: '',
      allCards: '',
      openEditCard: false,
      idEditCard: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickBtn = this.handleClickBtn.bind(this);
    this.handleCloseEditCard = this.handleCloseEditCard.bind(this);
    this.handleOpenEditCard = this.handleOpenEditCard.bind(this);
    this.searchCardInCards = this.searchCardInCards.bind(this);
  }

  handleChange(event) {
    const value = event.target.value.toLowerCase();

    const newCards = this.state.allCards.filter(card => card.name.toLowerCase().includes(value));

    this.setState({
      cards : newCards,
    })
  }

  handleClickBtn(event) {
    this.setState({
      openEditCard: !this.state.openEditCard,
      idEditCard: event.target.id
    })
  }

  handleCloseEditCard() {
    this.setState({
      openEditCard: !this.state.openEditCard,
      idEditCard: ''
    })
  }

  handleOpenEditCard(refs) {
    const id = refs[refs.length - 1].value;
    const cardInArray = this.searchCardInCards(id, this.state.allCards)[0];

    const editCardsArray = this.state.allCards.slice();

    for (let i = 0; i < refs.length; i++) {
      let name = refs[i].title;
      let value = refs[i].value;
      cardInArray[name] = value;
    }

    editCardsArray.forEach(card => {
      if (card.dbfId == Number(id)) {
        card = cardInArray;
      }
    })

    this.setState({
      cards: editCardsArray,
      allCards: editCardsArray,
    })

    this.handleCloseEditCard();
  }

  searchCardInCards(id, cards) {
    const copyCards = cards.slice();
    const card = copyCards.filter(card => card.dbfId == Number(id));

    return card;
  }

  componentDidMount() {
    axios.get(SETS_URL, { headers })
          .then(res => res.data)
          .then(res => this.setState({
            sets: res.standard,
            // cards: res.Basic,
            // allCards: res.Basic
          }))
  }

  render() {
    // console.log(this.state.sets)
    return (
      <div className="container">
        {/*{this.state.cards ? <SearchBar onStatusChange={this.handleChange} /> : ''}
        {this.state.openEditCard
          ? <EditCard
                card={this.state.cards.filter(card => card.dbfId === this.state.idEditCard)[0]}
                close={this.handleCloseEditCard}
                open={this.handleOpenEditCard}
             />
          : ''
        }
        <CardList Basic={this.state.cards} onClickBtn={this.handleClickBtn} />*/}

        <HomePage sets={this.state.sets} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
