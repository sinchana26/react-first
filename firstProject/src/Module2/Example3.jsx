import React from 'react'
import cars from '../assets/car.jpg'


const Example3 = () => {
    let a=20
    let b=30
    let fun=()=>alert("hello how are you")
  return (
    <div>
        <h1 className='title' id="heading">welcome to js class</h1>
        <img src={cars} alt="" height="200" width="200" />
        <abbr title="royal challenges bangalore">RCB</abbr>
        <h3>the sum of {a+b}</h3>
        <button onClick={fun}>Click here</button>
      
    </div>
  )
}

export default Example3
