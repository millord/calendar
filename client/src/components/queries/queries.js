import { gql } from '@apollo/client';



// Calendar queries
//findOne
const getCalendarEventQuery = gql`
  {
    calendarEvent{
      name
      description
    }
  }
`
//findMany
const getCalendarEventsQuery = gql`
  {
    calendarEvents{
      id
      name
      description
      date
    }
  }
`

// MUTATIONS
const addCalenderEventMutation = gql`
   mutation($name:String!, $description:String!, $date: String!) {
    addCalenderEvent(name:$name, description: $description, date: $date){
       name
       description
     }
   }
`

const updateCalendarEventMutation = gql`
   mutation($id: ID!, $name:String!, $description:String!,$date: String!) {
    updateCalendarEvent(id: $id,name:$name, description: $description,date: $date){
       name
       id
     }
   }
`

const removeCalendarEventMutation = gql`
   mutation($id: ID!) {
    removeCalendarEvent(id: $id){
       name
       id
     }
   }
`


export {
  getCalendarEventQuery, getCalendarEventsQuery, addCalenderEventMutation,
  updateCalendarEventMutation, removeCalendarEventMutation
}
