import React from 'react'

function Card(props) {
    const{name,age,status}=props
  return (
    <div>
        <h2>Name:{name}</h2>
        <h3>Age:{age}</h3>
        <p>Status:{status?"online":"offline"}</p>
      
    </div>
  )
}

export default Card
