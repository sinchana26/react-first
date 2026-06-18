import React from 'react'
//Hoc
const withAuth=(Wrapped)=>{
    return()=>{
        return(
            <>
            <h1>Hoc example</h1>
            <Wrapped/>
            </>
        )
    }
}
//normal
function Login(){
    return(
        <>
        <h3>User logged in</h3></>
    )
}
let Auth=withAuth(Login)
export default Auth