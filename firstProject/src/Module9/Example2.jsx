import React, { useRef } from 'react'

function Example2() {
    let h1ref=useRef(null)
     let inputref=useRef()

    let pref=useRef()

   
    
        
   

    let change=()=>{
        pref.current.style.color="red"
    
    h1ref.current.style.color="blue"
    h1ref.current.style.backgroundColor="grey"
     console.log(h1ref.current)
    
    inputref.current.style.backgroundColor="pink"
      console.log(inputref.current)

    }


  return (
    <div>
        <h1 ref={h1ref}>Accessing dom node example</h1>
        <input type="text" ref={inputref} />
        <div>
            <p ref={pref}>welcome to react js class</p>
           
        </div>
         <button onClick={change}>Click</button>
      
    </div>
  )
}

export default Example2
