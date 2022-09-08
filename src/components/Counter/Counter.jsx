import React from 'react'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import "./Counter.scss"


const Counter = (props) => {
  const {handleDecrement, handleIncrement, count} = props
  return (
    <div className='counter'>
      <h4 className='counter__heading'>Tickets Completed</h4>
      <p className='counter__tracker'>{count}</p>
      <ButtonContainer handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
    </div>
  )
}

export default Counter