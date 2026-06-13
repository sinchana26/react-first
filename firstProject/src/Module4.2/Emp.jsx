import React from 'react'
import Usecard from './Usecard'
import { useState } from 'react';

function Emp() {
     // State with Multiple Users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Priya",
      age: 24,
      city: "Bengaluru",
      role: "Frontend Developer",
      isOnline: true,
    },
    {
      id: 2,
      name: "Rahul",
      age: 27,
      city: "Hyderabad",
      role: "Backend Developer",
      isOnline: false,
    },
    {
      id: 3,
      name: "Sneha",
      age: 23,
      city: "Chennai",
      role: "UI/UX Designer",
      isOnline: true,
    },
  ]);

  // Update Status
  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isOnline: !user.isOnline,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };
  return (
     <div style={styles.container}>
      {users.map((user) => (
        <Usecard
          key={user.id}
          name={user.name}
          age={user.age}
          city={user.city}
          role={user.role}
          isOnline={user.isOnline}
          toggle={() => toggleStatus(user.id)}
        />
      ))}
    </div>
  )
}
// Styles
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px",
  },
};

export default Emp
