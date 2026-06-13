import React from 'react'
import Profile from './Profile'

function Example5({condition}) {
    let content=<h1>welcome to react js class</h1>
  return (
    <div>
        <h1>Example for logical and operator</h1>
        {condition && content}
        {condition &&<Profile/>}
        {condition&&<h4>Logged in succesfully</h4>}

      
    </div>
  )
}

export default Example5
