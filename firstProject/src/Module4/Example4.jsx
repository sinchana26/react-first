import React ,{useState} from 'react'


function Example4() {
    let[count,setCount]=useState(0)
  return (
    <div style={{textAlign:"center",margin:"50px auto"}}>
        <h1>Counter App</h1>
        <div  >
            <h3>The count value is:{count}</h3>
            {/* <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button> */}
            <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount((prev)=>prev-1)}>Decrement</button>
        </div>
      
    </div>
  )
}

export default Example4
