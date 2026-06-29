import React, { useContext } from 'react'
import { contextData } from './Component1'


function Component4() {
    const data=useContext(contextData)
  return (
   <div style={{height:"150px",width:"300px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component4</h1>
      <h5 style={{textAlign:"center"}}> {data[0]}
        </h5>
        <img src={data[1]} alt="no image" height="100px" width="100px" />
       
       
    </div>
  )
}

export default Component4