import React from 'react'
import "./ButtonContainer.scss"
import Button from '../Button/Button'

const ButtonContainer = () => {
  return (
    <div className='button-container'>
      <Button buttonText='-' />
      <Button buttonText='+' />
    </div>
  )
}

export default ButtonContainer