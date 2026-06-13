import React from 'react'
import Child2 from './Child2'

function Parent1() {
    let handleClick=()=>{
        alert("Profile will loaded soon..............")
    }
  return (
    <div>
        <Child2 name="riya" age={21} gender="female" click={handleClick}/>
         <Child2 name="rita" age={22} gender="male" click={handleClick}/>
      
    </div>
  )
}

export default Parent1
