import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';
import Ticket from './components/Ticket'
import Search from './components/Search';
import HiddenCounter from './components/HiddenCounter';
import RestoreButton from './components/RestoreButton';

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

  return (
    <main>
      <section id={"controlSection"}>
      <RestoreButton
        setNumberOfHidden={setNumberOfHidden}
        toRestore={toRestore}
        setToRestore={setToRestore}>
      </RestoreButton>
      <HiddenCounter
      numberOfHidden={numberOfHidden}>
      </HiddenCounter>
      <Search
        setSearchText={setSearchText}>  
      </Search>
      </section>
      <section id={"TicketsSection"}>
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
