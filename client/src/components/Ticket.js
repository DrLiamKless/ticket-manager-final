import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ticket(props) {

    return (
        <div className={"ticket"}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.userEmail} | {props.creationTime}</p>

        </div>
    )
}

export default Ticket