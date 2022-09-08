import React from 'react'
import SearchBox from '../SearchBox/SearchBox';
import "./SearchBar.scss"

const SearchBar = (props) => {
  const {handleInput} = props;
  return (
    <div className='search-bar'>
      <SearchBox handleInput={handleInput} />
      {/* <label htmlFor="role">Role:</label>
      <select id="role">

      </select> */}
    </div>
  )
}

export default SearchBar