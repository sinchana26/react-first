import React from 'react'

function Usercard({
  id,
  image,
  name,
  role,
  city,
  status,
  deleteUser,
  toggleStatus
}) {
  return (
    <div style={styles.card}>
      <img src={image} alt="user" style={styles.image} />

      <h2>{name}</h2>
      <p><b>Role:</b> {role}</p>
      <p><b>City:</b> {city}</p>

      <h3 style={{ color: status ? "green" : "red" }}>
        {status ? "Online" : " Offline"}
      </h3>

      <button
        style={styles.statusBtn}
        onClick={() => toggleStatus(id)}
      >
        Toggle Status
      </button>

      <button
        style={styles.deleteBtn}
        onClick={() => deleteUser(id)}
      >
        Delete User
      </button>
    </div>
  )
}

const styles = {
  card: {
    width: "250px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 0px 10px gray",
    textAlign: "center"
  },

  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover"
  },

  statusBtn: {
    padding: "10px",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px"
  },

  deleteBtn: {
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px"
  }
}

export default Usercard