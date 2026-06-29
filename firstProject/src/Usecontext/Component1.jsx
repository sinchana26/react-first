import React, { createContext, useState } from 'react'
import Component2 from './Component2'
export const contextData=createContext()

function Component1() {
    const[content,setContext]=useState("welcome to react js class")
    const[image,setImage]=useState("https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?cs=srgb&dl=pexels-mikebirdy-2365572.jpg&fm=jpg")
   const Change=()=>{
    setContext("thank you")
    setImage("https://tse2.mm.bing.net/th/id/OIP.Rk5t3WYp-PyRfM6c_Z0i6QHaEi?cb=thfvnextfalcon3&rs=1&pid=ImgDetMain&o=7&rm=3")

   }


    
   
     
  return (
    <div style={{height:"500px",width:"600px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component1</h1>
      <h4 style={{textAlign:"center"}}>{content}</h4>
      <img src={image} alt="" height="100px" width="100px" />
      <button onClick={Change}>Click</button>
      <contextData.Provider value={[content,image,Change]}>
      <Component2/>
      </contextData.Provider>
      
      
      
    </div>
  )
}

export default Component1