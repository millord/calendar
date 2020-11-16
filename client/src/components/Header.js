import React from 'react'
import Month from './Month'
import Year from './Year'


function Header({value, setValue}) {

 return (
  <div className="header">
    <div id="monthStyle">
    <Month value={value} setValue={setValue}/>
    </div>
   <div id="yearStyle">
   <Year value={value} setValue={setValue}/>
   </div>
    
    </div>
 )
}

export default Header;