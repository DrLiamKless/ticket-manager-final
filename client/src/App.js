import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket'
import Search from './components/Search';
import HiddenCounter from './components/HiddenCounter';

function App() {

  const [tickets, setTickets] = useState([]);
  const [searchText, setSearchText] = useState([])
  const [partialList, setPartialList] = useState([])
  const [numberOfHidden, setNumberOfHidden] = useState(0)

  useEffect(() => {
    axios.get(`/api/tickets?searchText=${searchText}`).then(res => {
      setTickets(res.data);
    });
    }, [searchText]
  )



  return (
    <main>
      <HiddenCounter
      numberOfHidden={numberOfHidden}></HiddenCounter>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}>  
      </Search>

      {tickets.map((ticket, i) => (
          <Ticket
            key={i}
            title={ticket["title"]}
            content={ticket["content"]}
            userEmail={ticket["userEmail"]}
            creationTime={ticket["creationTime"]}
            labels={ticket["labels"]}
            partialList={partialList}
            setPartialList={setPartialList}
            tickets={tickets}
            setTickets={setTickets}
            numberOfHidden={numberOfHidden}
            setNumberOfHidden={setNumberOfHidden}>
          </Ticket>
        ))}
    </main>
  );
}

export default App;
