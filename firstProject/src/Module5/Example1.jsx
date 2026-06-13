import React from 'react'

function Example1() {
    let handleClick=()=>{
        alert("welcoem to react class")
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
      
    </div>
  )
}

export default Example1
