import React from 'react'

function Example3() {
    let content="Welcome to react  js class"
    let handleclick=()=>{
        alert("Welcome to react js class")
    }
  return (
    <div>
        <h1>{content}</h1>
        <button onClick={handleclick}>Click</button>
      
    </div>
  )
}

export default Example3
