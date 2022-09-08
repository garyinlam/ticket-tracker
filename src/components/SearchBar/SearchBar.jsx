import React from 'react'
import Dropdown from '../Dropdown/Dropdown';
import SearchBox from '../SearchBox/SearchBox';
import "./SearchBar.scss"

const SearchBar = (props) => {
  const {handleInput, handleFilter, roles} = props;
  return (
    <div className='search-bar'>
      <SearchBox handleInput={handleInput} />
      <Dropdown items={roles} handleFilter={handleFilter} />
    </div>
  )
}

export default SearchBar