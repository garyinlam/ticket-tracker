import React from 'react'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import "./Counter.scss"


const Counter = () => {
  return (
    <div className='counter'>
      <h4 className='counter__heading'>Counter</h4>
      <p className='counter__tracker'>0</p>
      <ButtonContainer />
    </div>
  )
}

export default Counter