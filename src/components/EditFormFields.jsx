import React, {Component} from 'react';

// function EditFormFields(props) {
//   const { name, attack, health, faction, cost, playerClass, rapity, type, howToGetGold, cardSet, dbfId } = props.card;

//   const listItem = [
//     {
//       title : 'Имя',
//       label : 'name',
//       value : name
//     },
//     {
//       title : 'Атака',
//       label : 'attack',
//       value : attack
//     },
//     {
//       title : 'Жизни',
//       label : 'health',
//       value : health
//     },
//     {
//       title : 'Фракция',
//       label : 'faction',
//       value : faction
//     },
//     {
//       title : 'Стоимость',
//       label : 'cost',
//       value : cost
//     },
//     {
//       title : 'Класс',
//       label : 'playerClass',
//       value : playerClass
//     },
//     {
//       title : 'Редкость',
//       label : 'rapity',
//       value : rapity
//     },
//     {
//       title : 'Тип',
//       label : 'type',
//       value : type
//     },
//     {
//       title : 'Набор',
//       label : 'cardSet',
//       value : cardSet
//     }
//   ];

//   return (
//     <form onSubmit={event => props.open(event)}>
//       {listItem.map(element => {
//         return element.value
//               ?
//                 <div className="edit__form-field">
//                   <label className="edit__label" htmlFor={element.label}>{element.title} </label>
//                   <input className="edit__input"
//                          id={element.label}
//                          type="text"
//                          placeholder={element.value} />
//                 </div>
//               : '';
//       })}
//       <div className="edit__footer">
//         <input className="edit__btn" type="submit" value="Принять" onClick={event => props.open(event)} />
//         <button className="edit__btn" onClick={() => props.close()} >Отмена</button>
//       </div>
//     </form>
//   )
// }

class EditFormFields extends Component {
  constructor(props) {
    super(props);

    const { name, attack, health, faction, cost, playerClass, rapity, type, howToGetGold, cardSet, dbfId } = this.props.card;

    this.listItem = [
      {
        title : 'Имя',
        label : 'name',
        value : name
      },
      {
        title : 'Атака',
        label : 'attack',
        value : attack
      },
      {
        title : 'Жизни',
        label : 'health',
        value : health
      },
      {
        title : 'Фракция',
        label : 'faction',
        value : faction
      },
      {
        title : 'Стоимость',
        label : 'cost',
        value : cost
      },
      {
        title : 'Класс',
        label : 'playerClass',
        value : playerClass
      },
      {
        title : 'Редкость',
        label : 'rapity',
        value : rapity
      },
      {
        title : 'Тип',
        label : 'type',
        value : type
      },
      {
        title : 'Набор',
        label : 'cardSet',
        value : cardSet
      }
    ];

    this.parseRefs = this.parseRefs.bind(this);
  }

  parseRefs(refs) {
    const keys = Object.keys(refs);
    const id = this.props.card.dbfId;
    const value = keys.map((key, index) => {return {title: key, value : refs[key].value || refs[key].placeholder}});

    value.push({title: 'id', value: id});

    return value;
  }

  render() {

    return (
      <div>
        {this.listItem.map(element => {
          return element.value
                ?
                  <div className="edit__form-field">
                    <label className="edit__label" htmlFor={element.label}>{element.title} </label>
                    <input className="edit__input"
                          id={element.label}
                          type="text"
                          ref={element.label}
                          placeholder={element.value} />
                  </div>
                : '';
        })}
        <div className="edit__footer">
          <button className="edit__btn" onClick={() => this.props.open(this.parseRefs(this.refs))}>Принять</button>
          <button className="edit__btn" onClick={() => this.props.close()} >Отмена</button>
        </div>
      </div>
    )
  }
}

export default EditFormFields;
