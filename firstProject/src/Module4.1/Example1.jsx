import React, { useState } from 'react'

function Example1() {
   const[state,setState]= useState({name:"virat",city:"bangalore",age:30})
   let handleChange=()=>{
    setState({...state,name:"Sachin"})
   }
  return (
    <div>
        <h1>My name is {state.name}</h1>
        <h3>I am from {state.city}</h3>
        <p>I am {state.age} years old</p>
        <button onClick={handleChange}>Change</button>
      
    </div>
  )
}

export default Example1
