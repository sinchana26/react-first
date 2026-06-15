import React from 'react'

function Example1() {
  return (
    <div>
    <h1>Ordered List</h1>
    <ol type="a">
        <li>Benz</li>
        <li>BMW</li>
        <li>Audi</li>
        <li>Range Rover</li>
    </ol>
    <h1>Unordered List</h1>
    <ul>
        <li>Raj</li>
        <li>Riya</li>
        <li>Virat</li>
        <li>Sachin</li>
    </ul>
    <h1>Nested List</h1>
    <ol>
        <li>Java Full Stack</li>
        <ul>
            <li>Core java</li>
            <li>WEb technology</li>
            <li>mysql</li>
            <li>J2ee and jdbc

            </li>
            <li>Spring boot</li>
        </ul>
        <li>Python full stack</li>
       <ul type="square">
        <li>Core python</li>
        <li>Web technology</li>
        <li>my sql</li>
        <li>Django and rest api</li>
       </ul>
       <li>Mern stack</li>
       <ul type="disc">
        <li>react js</li>
        <li>node js</li>
        <li>exress js</li>
        <li>mongo db</li>
       </ul>
    </ol>
    <h1>Definition 
        List
    </h1>
    <dl>Student 1</dl>
    <dd>I am raj,i am fro  bangalore,i know react class</dd>
     <dl>Student 2</dl>
    <dd>I am riya,i am fro  mysore,i know react class</dd>
     <dl>Student 3</dl>
    <dd>I am sachin,i am fro  kolar,i know react class</dd>
      
    </div>
  )
}

export default Example1
