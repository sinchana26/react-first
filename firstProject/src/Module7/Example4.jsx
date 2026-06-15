import React from 'react'

function Example4() {
    const students = [
    {
      id: 1,
      name: "Raj",
      city: "Bangalore",
      skill: "React JS"
    },
    {
      id: 2,
      name: "Rahul",
      city: "Chennai",
      skill: "Python"
    }
  ];

  return (
    <div>
         <h1>Students Information</h1>

      {students.map((student) => {

      return(
        <dl key={student.id}>
          <dt>Name</dt>
          <dd>{student.name}</dd>

          <dt>City</dt>
          <dd>{student.city}</dd>

          <dt>Skill</dt>
          <dd>{student.skill}</dd>

          <hr />
        </dl>
      )
})}
      
      
    </div>
  )
}

export default Example4
