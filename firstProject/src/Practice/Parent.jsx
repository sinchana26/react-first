import React, { useState } from 'react'

function Parent() {
  const[username,setUsername]=useState('')
  let handleChange=(event)=>{
    setUsername(event.target.value)
  }
  
  let handleSubmit=(event)=>{
    event.preventDefault()

    alert("form submitted succesfully")
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>username</label>
        <input type="text" name="username" onChange={handleChange} />
        <br /><br />
        <label>password</label>
        <input type="text" name="password" />
        
        <button>Submit</button>
      </form>
  
      
      
    </div>
  )
}

export default Parent
