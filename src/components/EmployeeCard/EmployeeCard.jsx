import React from 'react'
import "./EmployeeCard.scss"
import Counter from '../Counter/Counter'


const EmployeeCard = () => {
  return (
    <div className='card'>
      <h2 className='card__name'>Name</h2>
      <h3 className='card__role'>Role</h3>
      <Counter />
    </div>
  )
}

export default EmployeeCard