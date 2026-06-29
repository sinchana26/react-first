import React, { useEffect, useState } from 'react'

function Example2() {
    const[count,setCount]=useState(0)
     useEffect(()=>{
        console.log('run renders each time')
    },[count])
    

  return (
    <div>
        <h1>No dependency Array</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
      
    </div>
  )
}

export default Example2
