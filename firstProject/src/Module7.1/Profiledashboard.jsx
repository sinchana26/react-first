import React from 'react'
//Hoc
function withUser(WrapperUSer){
    return(props)=>{
        return(<>
        <h1>with user</h1>
        <WrapperUSer{...props} name="virat" city="delhi"/>
        </>)
    }
}
//normal component
function Profile({name,city}){
    return(
        <>
        <h4>my name is{name}</h4>
        <p>i am from {city}</p>
        </>
    )

}
let Profiledashboard=withUser(Profile)
export default Profiledashboard