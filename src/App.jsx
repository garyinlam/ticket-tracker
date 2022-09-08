import './App.scss';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';

import { useState } from 'react';

import team from './data/team';

function App() {

  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  }

  return (
    <div className="app">
      <Header />
      <SearchBar handleInput={handleInput}  />
      <CardContainer teamArr={team.filter((a) => a.name.toLowerCase().includes(searchValue))} />
    </div>
  );
}

export default App;
