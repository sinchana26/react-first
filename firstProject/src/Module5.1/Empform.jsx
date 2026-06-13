import React, { useState } from 'react'

function Empform() {
    const[form,setForm]=useState({
        name:'',phone:'',email:'',
        password:'',cnfpassword:''
    })
    const[formfields,setFormfields]=useState(false)
    const[passerror,setPasserror]=useState(false)
    const[success,setSuccess]=useState(false)
    let handleChange=(event)=>{
                const value= event.target.value
                const name= event.target.name
                setForm({...form,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(form.name=='' ||
            form.email==''||
            form.cnfpassword==''
        ){
setFormfields(true)
        }
        else if(form.password!==form.cnfpassword){
 setPasserror(true)
        }
   else{
    setSuccess(true)
        console.log(form)
   }
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Employee Regstartion From</h1>
     <div style={{width:"350px",boxShadow:"0px 0px 10px black",
        borderRadius:"10px",textAlign:"center",padding:"10px",
        margin:"20px auto"
     }}>
         <form onSubmit={handleSubmit}>
        <label>Name</label><br></br>
        <input type='text' name="name" value={form.name}
        onChange={handleChange}
        style={style.input}/><br></br><br></br>
         <label>Phone</label><br></br>
        <input type='number' name="phone" value={form.phone}
        onChange={handleChange}
        style={style.input}/><br></br><br></br>
         <label>Email</label><br></br>
        <input type='email' name="email" value={form.email}
        onChange={handleChange}
        style={style.input}/><br></br><br></br>
         <label>Password</label><br></br>
        <input type='password' name="password" value={form.password}
        onChange={handleChange}
        style={style.input}/><br></br><br></br>
          <label>Confirm Password</label><br></br>
        <input type='password' name="cnfpassword" value={form.cnfpassword}
       onChange={handleChange}
       style={style.input}/><br></br><br></br>
      <button style={style.button}>Submit</button>
      </form>
     </div>
     <h3 style={{color:"red"}}>{formfields&&"please fill all the input fields"}</h3>
    <h3 style={{color:"red"}}>{passerror&&"password doen't match"}</h3>
     <h3 style={{color:"green"}}>{success&&"Form submitted successfully"}</h3>
    </div>
  )
}

const style={
    input:{
        width:"190px",
        padding:"3px"
    },
    button:{
        height:"50px",
        width:"120px",
        backgroundColor:"blue",
        color:"white",
        border:"none",
        borderRadius:"10px"
    }
}

export default Empform
