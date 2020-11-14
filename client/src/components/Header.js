import React from 'react'
import Month from './Month'
import Year from './Year'


function Header({value, setValue}) {

 return (
  <div className="header">
    <Month value={value} setValue={setValue}/>
    <Year value={value} setValue={setValue}/>
    </div>
 )
}

export default Header;