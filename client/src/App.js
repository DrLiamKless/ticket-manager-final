import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Ticket from './components/Ticket'
import Navbar from './components/Navbar';





function App() {

  const [toRestore, setToRestore] = useState(false)
  const [tickets, setTickets] = useState([]);
  const [searchText, setSearchText]  = useState([]);
  const [numberOfHidden, setNumberOfHidden] = useState(0);

  useEffect(() => {
    axios.get(`/api/tickets?searchText=${searchText}`).then(res => {
      setTickets(res.data);
    });
    }, [searchText]
  )

  const onInputChange = event => {
    setSearchText(event.target.value)
}

  return (
    <main>
      <section id={"navBar"}>
        <Navbar
        onInputChange={onInputChange}
        numberOfHidden={numberOfHidden}
        setNumberOfHidden={setNumberOfHidden}
        toRestore={toRestore}
        setToRestore={setToRestore}>

        </Navbar>
      </section>
      <section id={"ticketsSection"}>
        {tickets.map((ticket, i) => (
          <Ticket
            key={i}
            title={ticket["title"]}
            content={ticket["content"]}
            userEmail={ticket["userEmail"]}
            creationTime={ticket["creationTime"]}
            labels={ticket["labels"]}
            numberOfHidden={numberOfHidden}
            setNumberOfHidden={setNumberOfHidden}
            toRestore={toRestore}
            setToRestore={setToRestore}>
          </Ticket>
        ))}
      </section>
    </main>
  );
}

export default App;
