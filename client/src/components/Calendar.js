import React, {useState, useEffect} from 'react'


import "./index.css"
import createCalendar from './helper'
import dayStyles from './dayStyles'
import Header from './Header'
import moment from 'moment'

function Calendar ({value, onChange}) {
  const [calendar, setCalendar] = useState([])
  
  const currentDate = moment().clone().date()


  

    
  useEffect(() => {
    setCalendar(createCalendar(value))
  },[value])

  
  
return (
<div className="calendar">
  <Header value={value} setValue={onChange}/>
  <div className="body">
    <div className="day-names">
      {
        ["s", "m", "t", "w", "t", "f", "s"].map(day => <div className="week">{day}</div>)
      }
    </div>
  {
    calendar.map(week => <div>{week.map(day =>
      <div  className="day" onClick={() =>  onChange(day)}>  
        <div className={dayStyles(day,value)}>
        {day.format('D')} 
        {/* <span>data</span> */}
        </div>
        </div>
      )}</div>)
   }
  </div>
</div>
)
} 





export default Calendar