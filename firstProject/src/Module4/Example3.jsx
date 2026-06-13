import React, { useState } from 'react'

function Example3() {
   const[state,setState] =useState("welcome to react class")
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setState("thank you for attending react class")}>Click here</button>
      
    </div>
  )
}

export default Example3
