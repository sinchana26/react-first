import React, { useState } from 'react'

function Password() {
    const[showPassword,setShowPassword]=useState(false)

    const togglePassword=()=>{
       setShowPassword(!showPassword)
    }
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🔐 Password Toggle App</h1>
        <input type={showPassword?
            "text":"password"
        } placeholder='Enter Password'
        style={styles.input}/>
        <button style={styles.button}
        onClick={togglePassword}>{
            showPassword?"Hide Password":"ShowPassword"
}</button>
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
        backgroundColor:"white",
        padding:"30px",
        borderRadius:"12px",
        textAlign:"center",
        boxShadow:"0px 0px 10px black"
    },
    input:{
        width:"100%",
        padding:"10px",
        marginBottom:"20px",
        borderRadius:"5px",
        border:"1px solid #ccc",
        fontSize:"16px"
    },
    button:{
        padding:"10px 20px",
        border:"none",
        backgroundColor:"blue",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer",
        fontSize:"16px"
    }
}

export default Password
