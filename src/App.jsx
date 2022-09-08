import './App.scss';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';

import { useState } from 'react';

import team from './data/team';

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const handleInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  }

  const handleFilter = (e) => {
    setRoleFilter(e.target.value);
  }

  const rolesArr = [...new Set(team.map((person) => person.role))];

  return (
    <div className="app">
      <Header />
      <SearchBar handleInput={handleInput} handleFilter={handleFilter} roles={rolesArr} />
      <CardContainer teamArr={team.filter((a) => a.role.includes(roleFilter)).filter((a) => a.name.toLowerCase().includes(searchValue))} />
    </div>
  );
}

export default App;
