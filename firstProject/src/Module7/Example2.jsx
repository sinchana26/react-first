import React from 'react'

function Example2() {
   let cars=['benz','bmw','audi','range rover']
   const carImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  "https://images.unsplash.com/photo-1542362567-b07e54358753",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83b",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
  "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa"
];
//    cars.push('jaguar')
//    cars.unshift("rolls royce")
//    cars.splice(2,2)
  return (
    <div>
        <h1>ordered list</h1>
        <ol>
            {
                cars.map((ele,index)=>{
                    return <li keys={index}>{ele}</li>
                })
            }

        </ol>
        <h1>Unordered list</h1>
        <ul type="square">
            {
                carImages.map((ele,index)=>{
                    return <li keys={index}><img src={ele} alt="no image" height={200} width={200}/></li>
                })
            }


        </ul>
      
    </div>
  )
}

export default Example2
