import React from 'react'

function Productcard({keys,image,pname,price,deleteProduct,addCart}) {
  return (
    <div style={styles.card}>
      <img src={image}
    alt='no image' style={styles.image}/>
    <h2>{pname}</h2>
    <p>₹ {price}</p>
    <button style={styles.addBtn1}
    onClick={addCart}>Add To Cart</button>
    <button   style={styles.deletBtn}
    onClick={()=>deleteProduct(keys)}
   >Delete</button>
    </div>
  )
}

const styles={
    card:{
        width:"250px",
        backgroundColor:"white",
        borderRadius:"12px",
        padding:"20px",
        boxShadow:"0px 0px 10px black",
        textAlign:"center"
    },
    image:{
        width:"100%",
        height:"180px",
        objectFit:"cover",
        borderRadius:"10px"
    },
    deletBtn:{
        marginTop:"10px",
        padding:"10px 15px",
        border:"none",
        backgroundColor:"red",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    },
    addBtn1:{
        padding:"10px 15px",
        border:"none",
        backgroundColor:"orange",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    }
}

export default Productcard