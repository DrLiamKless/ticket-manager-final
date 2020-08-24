import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Ticket from './components/Ticket'
import './App.css';

function App() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("/api/tickets?:searchText=").then(res => {
      setTickets(res.data);
    });
    }, []
  )



  return (
    <main>
      {tickets.map((ticket, i) => (
          <Ticket
            key={i}
            title={ticket["title"]}
            content={ticket["content"]}
            userEmail={ticket["userEmail"]}
            creationTime={ticket["creationTime"]}>
          </Ticket>
        ))}
    </main>
  );
}

export default App;
