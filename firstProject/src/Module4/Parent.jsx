import React from 'react'
import Child from './Child'

const Parent = () => {
    const name="raj"
    const age=20
  return (
    <div>
        <Child name={name} age={age}/>

      
    </div>
  )
}

export default Parent
