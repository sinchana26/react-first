import React from 'react'

function Child1({subject="not available",name}) {
  return (
    <div>
        <h1>Welcome to {subject} class</h1>
        <p>My name is {name}</p>
      
    </div>
  )
}

export default Child1
