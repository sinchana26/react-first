import React, { useEffect, useRef, useState } from 'react'

function Example5() {
   const[count,setCount]= useState(0)
   let previousvalue=useRef()
   useEffect(()=>{
    previousvalue.current=count
   },[count])

  return (
    <div>
        <h1>Previous value storage</h1>
        <h5>Current value is :{count}</h5>
        <h5>Previous value is:{previousvalue.current}</h5>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      
    </div>
  )
}

export default Example5
