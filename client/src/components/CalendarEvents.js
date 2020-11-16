import {getCalendarEventsQuery,addCalenderEventMutation, updateCalendarEventMutation,removeCalendarEventMutation} from '../components/queries/queries'
import React, {useState, useEffect} from 'react'
import { useQuery, useMutation } from '@apollo/client';




function CalendarEvents({ storedDate }) {
    const [name, setName] = useState('')
    const [description, setDescription]  =  useState('')
    const [date, setDate] = useState('')
    
    const [addCalenderEvent, { data }] = useMutation(addCalenderEventMutation);
    const [updateCalendarEvent, { newdata }] = useMutation(updateCalendarEventMutation);
    const [removeCalendarEvent, { removedata }] = useMutation(removeCalendarEventMutation);

    useEffect(() => {
      if (storedDate) {
        setName(storedDate.name)
        setDescription(storedDate.description)
        setDate(storedDate.date)
      }
    }, [storedDate])
 
    
  const submitForm = (e) => {
   e.preventDefault();
   setName('')
   setDescription('')
   if (storedDate) {
     updateCalendarEvent({
      variables:{
        id: storedDate.id,
        name: name,
        description: description,
        date: date
      },
      refetchQueries:[{query:getCalendarEventsQuery}]
    })
   } else {
    addCalenderEvent({
      variables:{
        name: name,
        description: description,
        date: date
      },
      refetchQueries:[{query:getCalendarEventsQuery}]
    })
   }
  }
  const removeEvent =() => {
    removeCalendarEvent({
      variables:{
        id: storedDate.id
      },
      refetchQueries:[{query:getCalendarEventsQuery}]
    })
  }
  
  return (
  <div>
    <button id="buttonRemove" onClick={removeEvent}>-</button>
          <form onSubmit={submitForm}>
                <div className="field">
                    <label>Event name:</label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" />
                </div>
                <div className="field">
                    <label>Event Description:</label>
                    <input 
                    value={description}
                     onChange={(e) => setDescription(e.target.value)}
                    type="text" />
                </div>
                <div className="field">
                <label for="start">Choose your date:</label>
                   
              <input type="date" id="start" name="trip-start"
              value={date}
              min="2019-01-01" max="2022-12-31"
              onChange={(e) => setDate(e.target.value)}
              />
                </div>
               
                <button>+</button>
               
            </form>
            </div>
            

    
  );
}




export default CalendarEvents;