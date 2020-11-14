import {graphql, compose} from 'react-apollo'
import {getCalendarEventsQuery,addCalenderEventMutation} from '../components/queries/queries'
import {useState} from 'react'
import moment, { months } from 'moment'







function CalendarEvents(props) {
    const [name, setName]  =  useState('')
    const [description, setDescription]  =  useState('')
    const [date, setDate] = useState('')

 
    
  const submitForm = (e) => {
   e.preventDefault();
   setName('')
   setDescription('')
   props.addCalenderEventMutation({
     variables:{
       name: name,
       description: description,
       date: date
     },
     refetchQueries:[{query:getCalendarEventsQuery}]
   })
   
  }
 
  
 
  
  return (

          <form id="add-book" onSubmit={submitForm}>
                <div className="field">
                    <label>Event name:</label>
                    <input
                    onChange={(e) => setName(e.target.value)}
                    type="text" />
                </div>
                <div className="field">
                    <label>Event Description:</label>
                    <input 
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

    
  );
}

export default compose(
  graphql(addCalenderEventMutation, {name: "addCalenderEventMutation"}),
)(CalendarEvents);