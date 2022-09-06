import React from 'react'
import "./Counter.scss"


const Counter = () => {
  return (
    <div className='counter'>
      <h4 className='counter__heading'>Counter</h4>
      <p className='counter__tracker'>0</p>
      <div className='counter__buttons'>
        <button className='counter__button counter__button--minus'>-</button>
        <button className='counter__button counter__button--plus'>+</button>
      </div>
    </div>
  )
}

export default Counter