import React, { useState } from 'react'

function Example2() {
    const[count,setCount]=useState(0)
    // let change=()=>{
    //     setCount(()=>count+1)
    // }
  return (
    <div style={{height:"100px",textAlign:"center",width:"180px",boxShadow:"0px 0px 10px black",borderRadius:"10px",
                 padding:"10px",margin:"50px auto"
    }}>
        <h1>Count:{count}</h1>
        {/* <button style={{backgroundColor:"blue",color:"white",padding:"5px",border:"none",
            borderRadius:"10px",width:"100px"
        }} onClick={change}>Increase</button> */}
       <button style={{backgroundColor:"blue",color:"white",padding:"5px",border:"none",
            borderRadius:"10px",width:"100px"
        }} onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Example2
