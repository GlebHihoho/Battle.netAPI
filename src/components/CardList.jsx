import React, { Component } from 'react';
import axios    from 'axios';

const url = 'https://us.api.battle.net/wow/boss/24723?locale=en_US&apikey=e352rt7h37fh7ehehzcuynmksm4fj8fk';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id : '',
      name: '',
      description: ''
    };
  }

  componentDidMount() {
    axios.get(url)
         .then(response => response.data)
         .then(res => this.setState({
           id          : res.id,
           name        : res.name,
           description : res.description
          }))
  }


  render() {
    return (
      <div>
        <div>{this.state.id}</div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
      </div>
    )
  }
}

export default CardList;

