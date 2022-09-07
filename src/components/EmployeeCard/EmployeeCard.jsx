import React, { useState } from 'react'
import "./EmployeeCard.scss"
import Counter from '../Counter/Counter'


const EmployeeCard = (props) => {
  const {name, role} = props

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);

  }

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className='card'>
      <h2 className='card__name'>{name}</h2>
      <h3 className='card__role'>{role}</h3>
      <Counter handleDecrement={handleDecrement} handleIncrement={handleIncrement} count={counter} />
    </div>
  )
}

export default EmployeeCard