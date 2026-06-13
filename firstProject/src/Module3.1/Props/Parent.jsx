import React from 'react'
import Child from './Child'

function Parent() {
    let name="john"
    let age="25"
    let condition="true"
  return (
    <div>
        <h1>Parent Component</h1>
        <Child name="raj" age={20} condition={true}/>
           <Child name="virat" age={40} condition={false}/>
           <Child name={name} age={age} condition={condition}/>
      
    </div>
  )
}

export default Parent
