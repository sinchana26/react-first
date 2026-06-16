import React, { useState } from 'react'
import Productcard from './Productcard'
import { GiShoppingCart } from "react-icons/gi";

function Productlist() {
   const[ProductData,setProductData]=useState( [
  {
    id: 1,
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.nE_uoT22bff3E1QQdXdeTgHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    productname: "Headphones",
    price: 2500
  },
  {
    id: 2,
    imageUrl: "https://png.pngtree.com/png-clipart/20240811/original/pngtree-fast-charger-or-mobile-chargers-png-image_15751140.png",
    productname: "Charger",
    price: 999
  },
  {
    id: 3,
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.NIM_-Aeb7mAPyVdM1U0AEwHaFP?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    productname: "Laptop",
    price: 34999
  },
  {
    id: 4,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    productname: "Smart Watch",
    price: 4999
  },
  {
    id: 5,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    productname: "Mobile Phone",
    price: 18999
  },
  {
    id: 6,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    productname: "Bluetooth Speaker",
    price: 2999
  },
  {
    id: 7,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1063/1063198.png",
    productname: "Keyboard",
    price: 1499
  },
  {
    id: 8,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3474/3474360.png",
    productname: "Mouse",
    price: 799
  },
  {
    id: 9,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/863/863684.png",
    productname: "Camera",
    price: 25999
  }
])
const[item,setItems]=useState(0)
//Add product
const addProduct=()=>{
const newProduct={
     id: ProductData.length+1,
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.OhZzEWv43dvkW_IqcFphTQHaJN?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    productname: "Pendrive",
    price: 75999
}
setProductData([...ProductData,newProduct])
}
//delete product
const deleteProduct=(id)=>{
let updateProduct=ProductData.filter((ele)=>ele.id!==id)
setProductData(updateProduct)
}
//add to cart
const addCart=()=>{
setItems(item+1)
}
  return (
    <div style={styles.conatiner}>
   <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
       <h1 style={styles.h1ref}>🛍 Product List App</h1>

       <div style={{display:"flex",justifyItems:"center",alignItems:"center",
        flexDirection:"column"
       }}>
      <span style={{position:"relative",top:"30px",left:"10px",fontSize:"x-large",color:"red"}}>  {item}</span>
        <GiShoppingCart  style={styles.icon}/>
       </div>
   </div>
      <button style={styles.addBtn}
      onClick={addProduct}>Add Product</button>
<div style={styles.cardContainer}>
       {ProductData.map((ele)=>
       (
        <Productcard keys={ele.id}
        image={ele.imageUrl}  pname={ele.productname}
        price={ele.price}
        deleteProduct={deleteProduct}
        addCart={addCart}/>
       )
       )}
</div>
    </div>
  )
}

const styles={
    conatiner:{
        textAlign:"center",
        padding:"30px",
        backgroundColor:"#f4f4f4",
        minHeight:"100vh"
    },
    h1ref:{
        color:"#efa14d",
        fontFamily:"monospace",
        fontSize:"40px"
    },
    addBtn:{
          padding:"10px 15px",
        border:"none",
        backgroundColor:"green",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer",
        margin:"30px"
    },
    cardContainer:{
        display:"flex",
        gap:"20px",
        justifyContent:"center",
        flexWrap:"wrap"
    },
    icon:{
        height:"50px",
        width:"120px",
        color:"black",
        padding:"20px"
    }
}

export default Productlist

