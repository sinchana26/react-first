import React, { useState } from 'react'

function Example1() {
    const[state,setState]=useState(100)
    const[name,setName]=useState("raj")
    const[isPlaced,setisPlaced]=useState(true)
    const[data,setData]=useState({name:"sachin",age:47})
    const[arr,setArr]=useState([500,700,800,900])
    const[imageurl,setimageurl]=useState("https://thf.bing.com/th/id/OIP.pTC-8MFfywp-G_lN_8G4-QHaEK?o=7&cb=thfc1falcon2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3")
  return (
    <div>

        <h1>{state}</h1>
        <h3>My name is {name}</h3>
        {isPlaced?<p>yes</p>:<p>no</p>}
        <h4>My name is {data.name} i am  {data.age} years old</h4>
      <p>{arr[1]}</p>
      <img src={imageurl} alt="noimage" />
    </div>
  )
}

export default Example1
