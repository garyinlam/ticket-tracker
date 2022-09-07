import React from 'react'
import "./CardContainer.scss"
import EmployeeCard from '../EmployeeCard/EmployeeCard'

const CardContainer = (props) => {
  const {teamArr} = props;
  const teamJSX = teamArr.map((member) => { 
    return <EmployeeCard key={member.id} name={member.name} role={member.role} />
  })
  return (
    <div className='card-container'>
      {teamJSX}
    </div>
  )
}

export default CardContainer