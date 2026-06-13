import React from 'react'

function Example2({condition}) {
    if(condition){
  return (
    <div>
        <h1>Welcome user</h1>
        <p>you logged in succesfully</p>
      
    </div>
  )
}
  else{
    return (
        <>
        <h1>Please check username and password</h1>
        <p>Error in logged in</p>
        </>
    )
  }
}

export default Example2
