import React, { Component } from 'react';
import axios    from 'axios';

import Card from './Card';

const url     = 'https://us.api.battle.net/wow/boss/24723?locale=en_US&apikey=e352rt7h37fh7ehehzcuynmksm4fj8fk';
const bossUrl = 'https://us.api.battle.net/wow/boss/?locale=en_US&apikey=e352rt7h37fh7ehehzcuynmksm4fj8fk';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bosses : ''
    }
  }

  componentDidMount() {
    axios.get(bossUrl)
          .then(res => res.data)
          .then(res => this.setState({
            bosses : res.bosses
          }))
  }


  render() {
    console.log(this.state.bosses)
    return (
      <div className="card-list">
        {
          !this.state.bosses
            ? <div className="loader">Loading...</div>
            : this.state.bosses.map(boss => <Card key={boss.id} boss={boss}/>)
        }
      </div>
    )
  }
}

export default CardList;

