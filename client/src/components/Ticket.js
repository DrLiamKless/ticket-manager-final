import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HideButton from './HideButton';

function Ticket(props) {

    return (
        <div className={"ticket"}>
            <HideButton
            ticketIndex={props.key}
            partialList={props.partialList}
            setPartialList={props.setPartialList}
            tickets={props.tickets}
            setTickets={props.setTickets}
            numberOfHidden={props.numberOfHidden}
            setNumberOfHidden={props.setNumberOfHidden}>
            </HideButton>

            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.userEmail} | {props.creationTime}</p>
            {props.labels && props.labels.map((label, i) => (
                <div key={i} className={"label"}>{label}</div>
            ))}

        </div>
    )
}

export default Ticket