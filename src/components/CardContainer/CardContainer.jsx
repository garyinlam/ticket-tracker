import React from 'react'
import "./CardContainer.scss"
import EmployeeCard from '../EmployeeCard/EmployeeCard'

const CardContainer = (props) => {
  const {teamArr} = props;
  return (
    <div>
      {teamArr.map((member) => { 
        return <EmployeeCard key={member.id} name={member.name} role={member.role} />
      })}
    </div>
  )
}

export default CardContainer