import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>Child Component</h1>
        <p>my name is {props.name}</p>
        <p>my age is {props.age}</p>
        <pre>{props.condition?"Adult":"Men"}</pre>
      
    </div>
  )
}

export default Child
