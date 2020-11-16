import React, {useMemo, useState, useEffect} from 'react'
import {getCalendarEventsQuery,removeCalendarEventMutation,updateCalendarEventMutation} from '../components/queries/queries'
import { useQuery, useMutation } from '@apollo/client';

import "./index.css"
import createCalendar from './helper'
import dayStyles from './dayStyles'
import Header from './Header'
import moment from 'moment'

function Calendar ({value, onChange, setStoredDate}) {
  const [calendar, setCalendar] = useState([])
  const { loading, error, data } = useQuery(getCalendarEventsQuery);
  
  const currentDate = moment().clone().date()




  const datesByDate = useMemo(() => {
    const dates = new Map()
    if (data) {
      data.calendarEvents.forEach(date =>
        dates.set(date.date, date)
      )
    }
    return dates
  }, [data])

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
    calendar.map(week => <div>{week.map(day => {
      const date = moment(day).format('YYYY-MM-DD')
      const storedDate = datesByDate.get(date)
      return (
        <div
          className={`day ${!!storedDate ? 'scheduled' : ''}`}
          onClick={() => storedDate ? setStoredDate(storedDate) : onChange(day)}
        >
        <div className={dayStyles(day,value)}>
        {day.format('D')} 
        </div>
        </div>
      )
    }
      )}</div>)
   }
  </div>
</div>
)
} 





export default Calendar