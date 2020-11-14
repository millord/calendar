import Calendar from './components/Calendar'
import "./index.css"
import moment from 'moment'
import React, {useState} from 'react'
import CalendarEvents from './components/CalendarEvents'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {getCalendarEventsQuery} from './components/queries'
import {graphql} from 'react-apollo'


// apollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  const [value, setValue ]= useState(moment())
  return (
    <ApolloProvider client={client}>
    <div className="App">
     <Calendar value={value} onChange={setValue}/>
     <CalendarEvents value={value} onChange={setValue}/>
    </div>
    </ApolloProvider>
  );
}


export default graphql(getCalendarEventsQuery)(App);
