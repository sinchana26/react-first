import React from 'react'

function Example2() {
    let handleClick=(name)=>{
        alert("hello"+name)
    }
  return (
    <div>
         <button onClick={()=>handleClick("raj")}>Click me</button>
         <button onClick={()=>handleClick("virat")}>Change</button>
      
    </div>
  )
}

export default Example2
