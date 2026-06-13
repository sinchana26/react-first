import React, { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 27,
    city: "Hyderabad",
    role: "Backend Developer",
    status: "Offline"
  });

  const updateUser = () => {
    setUser({
      name: "Priya",
      age: 25,
      city: "Bangalore",
      role: "Frontend Developer",
      status: "Online"
    });
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          boxShadow: "0px 0px 10px gray",
          borderRadius: "10px",
          width: "300px",
          margin: "50px auto",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h2>{user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>City: {user.city}</h2>
        <h2>Role: {user.role}</h2>
        <h2>Status: {user.status}</h2>
      </div>

      <button
        onClick={updateUser}
        style={{
          height: "40px",
          width: "130px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "10px",
          display: "block",
          margin: "auto"
        }}
      >
        Update User
      </button>
    </div>
  );
}

export default Profile;
