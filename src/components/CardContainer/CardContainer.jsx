import React from 'react'
import "./CardContainer.scss"
import EmployeeCard from '../EmployeeCard/EmployeeCard'

const tempArr = [1,2,3,4,5,6,7,8];

const CardContainer = () => {
  return (
    <div>
      {tempArr.map(() => { 
        return <EmployeeCard />
      })}
    </div>
  )
}

export default CardContainer