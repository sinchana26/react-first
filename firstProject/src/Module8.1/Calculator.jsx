import React, { useEffect, useState } from 'react'

function Calculator() {
    const[num1,setNum1]=useState("")
        const[num2,setNum2]=useState("")
        const[Result,setResult]=useState(0)
        const[operator,setOperator]=useState("+")
        //useEffect
        useEffect(()=>{
CalculateResult()
        },[num1,num2,operator])
        //calulcate function
        const CalculateResult=()=>{
       let number1= Number(num1)
       let number2=  Number(num2)
       switch(operator){
        case "+":
            setResult(number1+number2)
            break;
             case "-":
            setResult(number1-number2)
            break;
             case "*":
            setResult(number1*number2)
            break;
             case "/":
            setResult(number1/number2)
            break;
            default:
                setResult(0)
       }
        }
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🧮 Simple Calculator</h1>
        <input type='number' placeholder='Enter First Number'
        style={styles.input} value={num1} onChange={(e)=>setNum1(e.target.value)}
        />
        <select  style={styles.select}
        value={operator}
        onChange={((e)=>setOperator(e.target.value))}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
         <input type='number' placeholder='Enter Second Number'
        style={styles.input} value={num2} onChange={(e)=>setNum2(e.target.value)} />
        <h2>Result: {Result}</h2>
        <button style={styles.button}>Reset</button>
      </div>
    </div>
  )
}

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },

  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "white",
    textAlign: "center",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    fontSize: "16px",
  },

  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Calculator
