import React, { useState } from 'react'

function Example1() {
    const[state,setState]=useState(100)
    const[name,setName]=useState("virat")
    let[isplaced,setIsPlaced]=useState(false)
    const[data,setData]=useState({name:"Raj",age:27})
    const[num,setnum]=useState([100,200,400,500])
    const[image,setImage]=useState("https://thf.bing.com/th/id/OIP.wU6FwxYKt4hsqwxBj-F7IAHaEK?w=271&h=180&c=7&r=0&o=7&cb=thfc1falcon2&dpr=1.5&pid=1.7&rm=3")
  return (
    <div>
        <h1>{state}</h1>
        <h3>My name is {name}</h3>
        <p>{isplaced?"yes":"no"}</p>
        <h4>My name is {data.name} i am {data.age} years old</h4>
        <h5>The array value is {num[2]}</h5>
        <img src={image} alt="no image" height={200} width={200} />
      
    </div>
  )
}

export default Example1
