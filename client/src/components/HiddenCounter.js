import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HiddenCounter(props) {


    return (
    <div>
        <p>hidden tickets</p>
        <div id={"hideTicketsCounter"}>{props.numberOfHidden}</div>
    </div>
    )
}

export default HiddenCounter