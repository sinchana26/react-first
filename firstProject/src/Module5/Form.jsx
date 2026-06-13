import React from 'react'

function Form() {
    let handleSubmit=(event)=>{
    event.preventDefault()
        alert("form ssubmitted succesfuly")
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label>User name</label>
            <input type="text" name="username" />
            <br /><br /><br /><br />
            <label>Password</label>
            <input type="password" name="password" />
            <br /><br /><br /><br />
            <input type="submit" />
        </form>
      
    </div>
  )
}

export default Form
