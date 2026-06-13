import React from 'react'
import Profile from './Profile'
import Home from './Home'
function Example3({condition}) {
    if(condition){
        return <Profile/>

    }
    else{
        return <Home/>
    }
 
}

export default Example3
