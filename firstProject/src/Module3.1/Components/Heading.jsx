import React, { Component } from 'react'

export default class Heading extends Component {
  render() {
    return (
      <div style={{height:"70px",
        width:"100%",backgroundColor:"lightGreen",textAlign:"center",
        padding:"5px",display:"flex",justifyContent:"center",alignItems:"center",
        boxShadow:"0px 0px 10px lightgray",margin:"10px"
    }}>
        <h1>Heading Component</h1>
        
      </div>
    )
  }
}
