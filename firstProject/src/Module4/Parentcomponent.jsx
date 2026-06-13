import React from 'react'
import Childcomponent  from './Childcomponent'

function Parentcomponent() {
    let company="wipro"
    let expyear="3 years"
  return (
    <div>
        <Childcomponent name="sachin" age="32" city="mysore" company={company} exp={expyear}/>
         <Childcomponent name="raj" age="22" city="bengaluru" company={company} exp={expyear}/>
      
    </div>
  )
}

export default Parentcomponent
