import React, { useEffect, useState } from 'react'

function Clock() {
    const[time,setTime]=useState(new Date())
    //useEffect hook
    useEffect(()=>{
        //update the time every seconds
       let timerId= setInterval(()=>{
            setTime(new Date())
        },1000)
        return()=>{
            clearInterval(timerId)
        }


    },[])
  return (
    <div style={styles.container}>
        <div style={styles.card}>
            <h1>⏰ Real time Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>
            <p>{time.toLocaleDateString()}</p>
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
    }
}

export default Clock
