import React from 'react'
import "./ButtonContainer.scss"
import Button from '../Button/Button'

const ButtonContainer = (props) => {
  const {handleDecrement, handleIncrement} = props
  return (
    <div className='button-container'>
      <Button buttonText='-' handleClick={handleDecrement} />
      <Button buttonText='+' handleClick={handleIncrement} />
    </div>
  )
}

export default ButtonContainer