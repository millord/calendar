import Calendar from './components/Calendar'
import "./index.css"
import moment from 'moment'
import React, {useState} from 'react'
import CalendarEvents from './components/CalendarEvents'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';




// apollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
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


export default App;
