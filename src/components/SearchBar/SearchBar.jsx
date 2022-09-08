import React from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const {handleInput} = props;
  return (
    <div className='search-bar'>
      <label htmlFor="search">Search:</label>
      <input type="text" id='search' className='search-bar__search-box' placeholder='Search by name' onChange={handleInput} />
      {/* <label htmlFor="role">Role:</label>
      <select id="role">

      </select> */}
    </div>
  )
}

export default SearchBar