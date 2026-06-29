import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
   const[content,setContent]=useState("welcome to react class")
    const [image, setImage] = useState(
      "https://www.bing.com/th/id/OIP.wU6FwxYKt4hsqwxBj-F7IAHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
  )

   
    let name="virat kholi"
    let Change=()=>{
        setContent("Thankyou for visiting")
        setImage("https://tse2.mm.bing.net/th/id/OIP.bjLrDUkxtii-c3kzCGBqlwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3")
    }
     
  return (
    <div style={{height:"500px",width:"600px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component1</h1>
      <h4 style={{textAlign:"center"}}>{content} {name}</h4>
      <button onClick={Change}>Change</button>
      <img
        src={image}
        alt="img"
        width="80"  display= "block"
    margin= "auto"

      />

      <Component2 name={name} content={content}     image={image}
        />
       
    </div>
  )
}

export default Component1