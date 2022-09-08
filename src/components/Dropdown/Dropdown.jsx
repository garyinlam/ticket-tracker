import React from 'react'
import "./Dropdown.scss"

const Dropdown = (props) => {
  const {items, handleFilter} = props

  const itemsJSX = items.map((a,index) => {
    return <option key={index} value={a}>{a}</option>
  })

  return (
    <div>
      <label htmlFor="role">Role:</label>
      <select id="role" onChange={handleFilter}>
        <option value="">Select role:</option>
        {itemsJSX}
      </select>
    </div>
  )
}

export default Dropdown