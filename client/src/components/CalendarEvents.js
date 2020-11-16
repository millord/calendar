import { getCalendarEventsQuery, addCalenderEventMutation, updateCalendarEventMutation, removeCalendarEventMutation } from '../components/queries/queries'
import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import moment from 'moment'




function CalendarEvents({ storedDate }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const [addCalenderEvent, { data }] = useMutation(addCalenderEventMutation);
  const [updateCalendarEvent, { newdata }] = useMutation(updateCalendarEventMutation);
  const [removeCalendarEvent, { removedata }] = useMutation(removeCalendarEventMutation);

  const currentDate = moment().format('YYYY-MM-DD')

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
        variables: {
          id: storedDate.id,
          name: name,
          description: description,
          date: date
        },
        refetchQueries: [{ query: getCalendarEventsQuery }]
      })
    } else {
      addCalenderEvent({
        variables: {
          name: name,
          description: description,
          date: date
        },
        refetchQueries: [{ query: getCalendarEventsQuery }]
      })
    }
  }
  const removeEvent = () => {
    setName('')
    setDescription('')
    removeCalendarEvent({
      variables: {
        id: storedDate.id
      },
      refetchQueries: [{ query: getCalendarEventsQuery }]
    })
  }

  const resetEvent = () => {
    setName('')
    setDescription('')
  }

  return (
    <div>

      <form onSubmit={submitForm}>
        <div className="field">
          <label>Event name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text" />
        </div>
        <div className="field">
          <label>Event Description:</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            type="text" />
        </div>
        <div className="field">
          <label for="start">Choose your date:</label>

          <input type="date" id="start" name="trip-start"
            value={currentDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button>+</button>
        <button id="buttonRemove" onClick={removeEvent}>-</button>

        <button id="buttonReset" onClick={resetEvent}>r</button>
      </form>
    </div>



  );
}




export default CalendarEvents;