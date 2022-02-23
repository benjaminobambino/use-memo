import './App.css';
import React, { useMemo } from 'react';
import List from './components/List';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' }
];

const App = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

export default App;
