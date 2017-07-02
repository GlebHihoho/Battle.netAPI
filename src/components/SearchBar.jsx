import React from 'react';

function SearchBar(props) {
  const { onStatusChange } = props;

  return (
    <div className="search">
      <input className="search__field"
             type="text"
             placeholder="Поиск по имени"
             onChange={event => onStatusChange(event)} />
    </div>
  )
}

export default SearchBar;
