import React,{useState,useRef} from 'react'

function Stopwatch() {
   const[time,setTime] =useState(0)
   const intervalRef=useRef()
   const startTimer=()=>{
    intervalRef.current=setInterval(()=>{
    setTime((prev)=>prev+1)
   },1000)
   
   }
   const stopTimer=()=>{
    clearInterval(intervalRef.current)
   }

  return (
    <div>
        <h1>Stopwatch using useref hook</h1>
        <h5>{time}</h5>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      
    </div>
  )
}

export default Stopwatch
