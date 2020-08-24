import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticket from './Ticket';

function HideButton(props) {

    const toHide = () => {
        let listToSet = props.tickets.slice();
        listToSet.splice(props.ticketIndex, 1)
        props.setTickets(listToSet);
        props.setNumberOfHidden(props.numberOfHidden + 1)
    }

    return (    
        <button
            className={"hideTicketButton"}
            onClick={toHide}>hide</button>
    )
}

export default HideButton