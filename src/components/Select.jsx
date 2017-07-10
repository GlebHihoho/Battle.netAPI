import React from 'react';

function Select(props) {
  const { sets } = props;

  return (
    <select className="home-page__select" name="" id="1">
      {
        sets.map(element => {
          return <option key={element}
                         className="home-page__option"
                         value={element}>{element}</option>
        })
      }
    </select>
  )
}

export default Select;
