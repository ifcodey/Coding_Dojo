import React from 'react'

const Personal_card = (props) => {
  return (
    <div>
      <h2>First Name : {props.firstname}</h2>
      <p>Last Name : {props.lastname}</p>
      <p>Age : {props.age}</p>
      <p>Color : {props.Color}</p>
    </div>
  )
}

export default Personal_card
