import React from "react";

function Usercard(props) {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>City:</strong> {props.city}
      </p>

      <p>
        <strong>Role:</strong> {props.role}
      </p>

      <p>
        <strong>Status:</strong>

        <span
          style={{
            color: props.isOnline ? "green" : "red",
            marginLeft: "5px",
            fontWeight: "bold",
          }}
        >
          {props.isOnline ? "Online" : "Offline"}
        </span>
      </p>

      <button style={styles.button} onClick={props.toggle}>
        Change Status
      </button>
    </div>
  );
}

// Styles
const styles = {
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
  },

  button: {
    marginTop: "10px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Usercard;