import React, { useRef } from 'react'

function Example1() {
    let refContainer=useRef(10)
    let handleClick=()=>{
        let res=refContainer++
        console.log(res)
    }
  return (
    <div>
        <h1>Example for useref hook</h1>
        <p>Ref value is:{refContainer.current}</p>
        <button onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default Example1
