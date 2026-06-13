import React from 'react'

function Example1({condition}) {
 
  if(condition){
     return <h1>Welcome user login succesfully</h1>
  }
  else{
    return <h1>please check username or passwword</h1>
  }
}

export default Example1
