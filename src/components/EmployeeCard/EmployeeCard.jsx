import React, { useState } from 'react'
import "./EmployeeCard.scss"
import Counter from '../Counter/Counter'


const EmployeeCard = (props) => {
  const {name, role} = props

  return (
    <div className='card'>
      <h2 className='card__name'>{name}</h2>
      <h3 className='card__role'>{role}</h3>
      <Counter />
    </div>
  )
}

export default EmployeeCard