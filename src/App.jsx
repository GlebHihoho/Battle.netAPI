import React      from 'react';
import ReactDOM   from 'react-dom';

import CardList   from './components/CardList';

function App() {
  return (
    <div>
      <CardList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
