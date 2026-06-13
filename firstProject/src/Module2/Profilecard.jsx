import React from 'react'
import './profilecard.css'
function Profilecard() {
    const imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6tdNPGQZCscIEkn4iSBXwT1YHmhRu8Lqpg&s";
    const name="Virat Kohli";
    const  role= "Cricketer";
    const  isOnline= true;
  return (
    <div>
        <h1 className="profile-card-heading">Profile Card Component</h1>
      <div className="profile-card-content">
        <img src={imageURL} alt={name} 
        height={200} width={200}/>
        <h2>{name}</h2>
        <p>{role}</p>
        <button className="follow-button">Follow</button>
        <p className={isOnline ? "online" : "offline"}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>

      
    </div>
  )
}

export default Profilecard
