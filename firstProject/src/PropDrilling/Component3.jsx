import React from 'react'
import Component4 from './Component4'

function Component3({name,content,image}) {
  return (
   <div style={{height:"230px",width:"400px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component3</h1>
      <Component4 name={name} content={content}     image={image}
        />
    </div>
  )
}

export default Component3
