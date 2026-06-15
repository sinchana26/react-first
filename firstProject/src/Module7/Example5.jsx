import React from 'react'

function Example5() {
    const student=[
        {
            id:1,name:"raj",city:"bangalore",skill:"react js"
        },
         {
            id:2,name:"riya",city:"bangalore",skill:" js"
        },
         {
            id:3,name:"ramu",city:"bangalore",skill:" jvaa"
        },
    ]
  return (
    <div>
        <h1>React table</h1>
        <table border={1}>
            <tr>
                <th>Student id</th>
                <th>Name</th>
                <th>City</th>
                <th>Skill</th>
            </tr>
            {student.map((ele)=>{
                return(
                    <>
                    <tr keys={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.city}</td>
                        <td>{ele.skill}</td>
                    </tr>
                    </>

                )

            })}
        </table>
      
    </div>
  )
}

export default Example5
