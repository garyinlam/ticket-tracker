import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
  const {handleInput} = props
  return (
    <>
      <label htmlFor="search" className='search-label'>Search:</label>
      <input type="text" id='search' className='search-box' placeholder='Search by name' onChange={handleInput} />
    </>
  )
}

export default SearchBox