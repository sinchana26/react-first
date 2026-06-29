import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const[time,setTime]=useState({
        hours:0,
        minutes:0,
        second:0,
    })
    const[isRunning,setIsRunning]=useState(false)
    //useEffect
    useEffect(()=>{
        let interval
        if(isRunning){
            interval=setInterval(()=>{
                setTime((prevTime)=>{
                    let {hours,minutes,second}=prevTime
                
                    second++
                    //seconds logic
                    if(second===60){
                        second=0
                        minutes++
                    }
                    //minutes Logic
                    if(minutes==60){
                        minutes=0
                        hours++
                    }
                    return{
                        hours,minutes,second
                    }
                })
            },1000)
        }
        return()=>{
            clearInterval(interval)
        }
    },[isRunning])
    //start
    const StartWatch=()=>{
        setIsRunning(true)
    }
    //Stop
    const StopWatch=()=>{
        setIsRunning(false)
    }
    //Reset
    const ResetWatch=()=>{
        setIsRunning(false)
        setTime({
            hours:0,
            minutes:0,
            second:0
        })
    }
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>⏱ Stopwatch</h1>
        <h2>{String(time.hours).padStart(2,"0")}:
            {String(time.minutes).padStart(2,"0")}:
            {String(time.second).padStart(2,"0")}
        </h2>
        <div style={styles.buttonContainer}>
            <button style={styles.startBtn}
            onClick={StartWatch}
            >Start</button>
            <button style={styles.stopBtn}
            onClick={StopWatch}
            >Stop</button>
            <button style={styles.resetBtn}
            onClick={ResetWatch}
            >Reset</button>
        </div>
      </div>
    </div>
  )
}

const styles={
    container:{
         display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#f4f4f4"
    },
    card:{
             width:"350px",
        padding:"30px",
        borderRadius:"12px",
        textAlign:"center",
        backgroundColor:"white",
        boxShadow:"0px 0px 10px black"
    },
    buttonContainer:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"20px"
    },
    startBtn:{
        padding:"10px 20px",
        border:"none",
        backgroundColor:"green",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    },
    stopBtn:{
            padding:"10px 20px",
        border:"none",
        backgroundColor:"red",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    },
    resetBtn:{
            padding:"10px 20px",
        border:"none",
        backgroundColor:"orange",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    }
}

export default Stopwatch
