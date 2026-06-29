import React from 'react'



//Hoc
function withAuthentication(WrappedComponent){
    const isLoggedin=false //placeholder for authentication status
    return(props)=>{
        if(isLoggedin){
            return <WrappedComponent isLoggedIn={isLoggedin}{...props}/>
        }
    
    else {
         return <div>Please login to view this content</div>
    }

    }
}




//Normal Component
function  Authenticationcomponent(isLoggedin){
    return(
        <div>
            {isLoggedin?<p>Authenticated conetnt</p>:<p>Not authenticated content</p>}
        </div>
    )
}
const Enhancedcomponent=withAuthentication(Authenticationcomponent)
export default Enhancedcomponent