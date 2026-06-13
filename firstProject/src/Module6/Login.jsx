import React, { useState } from 'react'

function Login() {
  const [logindo, setLogindo] = useState(false)

  const togglebutton = () => {
    setLogindo(!logindo)
  }

  const profile = (
    <div>
      <h1>Profile Component</h1>
      <h3>Hello Ram, You Logged In Successfully ✅</h3>
    </div>
  )

  const home = (
    <div>
      <h1>Home Component</h1>
      <h3>Hello Ram, You Logged Out Successfully 👋</h3>
    </div>
  )

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {logindo ? profile : home}

        <button
          style={styles.button}
          onClick={togglebutton}
        >
          {logindo ? "Logout" : "Login"}
        </button>

      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4"
  },
  card: {
    width: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 0px 10px black"
  },
  button: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px"
  }
}

export default Login