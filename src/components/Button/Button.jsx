import React from 'react'
import "./Button.scss"

const Button = (props) => {
  const {buttonText, handleClick} = props
  return (
    <button onClick={handleClick} className='button'>{buttonText}</button>
  )
}

export default Button