import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticket from './Ticket';

function RestoreButton(props) {

    async function restoreAll() {
        props.setToRestore(!props.toRestore);
    }

    return (    
        <button id={"restoreHideTickets"} onClick={restoreAll}>
        restore
        </button>
    )
}

export default RestoreButton