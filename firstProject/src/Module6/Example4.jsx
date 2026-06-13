import React from 'react'
import Profile from './Profile'
import Home from './Home'

function Example4({condition}) {
    const login=<h3>you have been logged in sucessfully</h3>
    const logout=<h3>you have logged out</h3>
  return (
    <div>
        <h1>Example for ternary operator</h1>
        {condition?login:logout}
        {condition?<Profile/>:<Home/>}
      
    </div>
  )
}

export default Example4
