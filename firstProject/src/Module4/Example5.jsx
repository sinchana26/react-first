import React, { useState } from 'react'

function Example5() {
    const[image,setImage]=useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png')
    let changeAngular=()=>{
        setImage('https://tse3.mm.bing.net/th/id/OIP.liYbsPpCk8BCLhNs9R9Z4wHaE8?cb=thfc1falcon2&w=1472&h=983&rs=1&pid=ImgDetMain&o=7&rm=3')
    }
     let changeReact=()=>{
        setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png')
    }
  return (
    <div style={{textAlign:"center",margin:"50px auto"}}>
        <img src={image} alt="no image"  height={300} width={300}/>
        <div>
        <button style={{margin:"10px"}} onClick={changeReact}>React</button>
        <button style={{margin:"10px"}} onClick={changeAngular}>Angular</button>
        </div>
      
    </div>
  )
}

export default Example5
