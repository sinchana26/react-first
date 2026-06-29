import React, { useRef } from 'react'

function Example3() {

    let refContainer=useRef(0)
    let change=()=>{
         let res=refContainer.current++
        console.log(res)
    }
  return (
    <div>
        <h1>Example for  storing mutable value</h1>
        <h3>Ref value is {refContainer.current}  </h3>
        <button onClick={change}>Click</button>
      
    </div>
  )
}

export default Example3
