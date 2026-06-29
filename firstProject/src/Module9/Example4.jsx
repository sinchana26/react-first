import React, { useEffect, useRef } from 'react'

function Example4() {
     let inputref=useRef()
     let inputref1=useRef()
     useEffect(()=>{
        inputref.current.focus()


     },[])
     let handlechange=()=>{
        inputref1.current.focus()

     }
  return (
    <div>
        <h1>Focus input automatically</h1>
        <input type="text"  ref={inputref}/>
        <br />
        <input type="text"  ref={inputref1}/>
        <button onClick={handlechange}>Click</button>
      
    </div>
  )
}


export default Example4
