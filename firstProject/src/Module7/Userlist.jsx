import React, { useState } from 'react'
import Usercard from './Usercard'

function Userlist() {

  const [users, setUsers] = useState([
    {
      id: 1,
      image:
        "https://thf.bing.com/th/id/R.05fc610accea479e3d0f9cc8aba7b7a8?rik=ph8%2bW3g3SD%2bEKQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fDifferent-Cute-Girl-Photos.jpg&ehk=j0pBDnODj9Ad5qTWwHxWs84vQGgkWhoWO9cQgkEeN%2bE%3d&risl=&pid=ImgRaw&r=0",
      name: "Anjali",
      role: "Developer",
      city: "Bangalore",
      status: true
    },

    {
      id: 2,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.H8biXBaAw7P1mXTj-H_5SwHaL5?cb=thfc1falcon2&w=705&h=1133&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: "Riya",
      role: "Designer",
      city: "Mumbai",
      status: false
    },

    {
      id: 3,
      image:
        "https://wallpaperaccess.com/full/5732.jpg",
      name: "Priya",
      role: "Tester",
      city: "Chennai",
      status: true
    }
  ])

  // Add User
  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.7oCpgtkWRjW-A1V9j4G-KAHaEo?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: "Sita",
      role: "Intern",
      city: "Delhi",
      status: false
    }

    setUsers([...users, newUser])
  }

  // Delete User
  const deleteUser = (id) => {
    const updatedUsers = users.filter(
      (user) => user.id !== id
    )

    setUsers(updatedUsers)
  }

  // Toggle Status
  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          status: !user.status
        }
      }
      return user
    })

    setUsers(updatedUsers)
  }

  return (
    <div style={styles.container}>
      <h1>User List App</h1>

      <button
        style={styles.addBtn}
        onClick={addUser}
      >
        Add User
      </button>

      <div style={styles.cardContainer}>
        {users.map((user) => (
          <Usercard
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            role={user.role}
            city={user.city}
            status={user.status}
            deleteUser={deleteUser}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh"
  },

  addBtn: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px"
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  }
}

export default Userlist