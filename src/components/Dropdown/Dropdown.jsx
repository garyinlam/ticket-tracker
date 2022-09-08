import React from 'react'
import "./Dropdown.scss"

const Dropdown = (props) => {
  const {items, handleFilter} = props

  const itemsJSX = items.map((a,index) => {
    return <option key={index} value={a}>{a}</option>
  })

  return (
    <>
      <label htmlFor="role" className='dropdown-label'>Role:</label>
      <select id="role" onChange={handleFilter} className='dropdown-box'>
        <option value="">Select role:</option>
        {itemsJSX}
      </select>
    </>
  )
}

export default Dropdown