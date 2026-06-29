import React from 'react'

function Component4({name,content,image}) {
  return (
   <div style={{height:"150px",width:"300px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component4</h1>
      <h5 style={{textAlign:"center"}}>{content} {name}  
        </h5>
         <img
        src={image}
        alt="img"
        width="80"
      />
    </div>
  )
}

export default Component4