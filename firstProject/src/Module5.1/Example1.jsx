import React, { useState } from 'react'

function Example1() {
    const[text,setText]=useState('')
    // const[password,setPassword]=useState('')
    let handleChange=(event)=>{
        setText(event.target.value)
    }
  return (
    <div>
        <input type="text"  value={text} onChange={handleChange}/>
        <p>you typed text:{text}</p>
        {/* <input type="password" value={password} onChange={} /> */}

      
    </div>
  )
}

export default Example1
