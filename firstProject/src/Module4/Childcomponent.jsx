import React from 'react'

function Childcomponent(props) {
  return (
    <div>
        <h1>My name is {props.name}</h1>
        <h2>I am {props.age} years old</h2>
        <p>I am from {props.city}</p>
      <h3>I am current working {props.company}</h3>
      <h4>I have {props.exp} of experience</h4>
      
    </div>
  )
}

export default Childcomponent
