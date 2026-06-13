import React from 'react'

function Child2({name,age,gender,click}) {
  return (
    <div>
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <h3>Gender:{gender}</h3>
        <button onClick={click}> Load more</button>

      
    </div>
  )
}

export default Child2
