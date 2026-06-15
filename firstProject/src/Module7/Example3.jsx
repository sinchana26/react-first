import React from 'react'

function Example3() {
    const hotelMenu = [
  {
    category: "Breakfast",
    item1: "Idli",
    item2: "Dosa",
    item3: "Poori",
    item4: "Upma"
  },
  {
    category: "Lunch",
    item1: "Veg Biryani",
    item2: "Meals",
    item3: "Fried Rice",
    item4: "Paneer Curry"
  },
  {
    category: "Dinner",
    item1: "Chapati",
    item2: "Butter Naan",
    item3: "Chicken Curry",
    item4: "Jeera Rice"
  },
  {
    category: "Desserts",
    item1: "Gulab Jamun",
    item2: "Ice Cream",
    item3: "Rasgulla",
    item4: "Chocolate Cake"
  }
];
  return (
    <div>
        <h1>Nested List</h1>
        <ol type="1">
            {hotelMenu.map((Element,index)=>{
                return(
                    <>
                    <li keys={index}>{Element.category}</li>
                    <ul>
                        <li>{Element.item1}</li>
                        <li>{Element.item2}</li>
                        <li>{Element.item3}</li>
                        <li>{Element.item4}</li>
                        </ul>
                        </>
            )
            
                
            
            })}
        </ol>

    </div>
  )
}

export default Example3
