import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HiddenCounter(props) {


    return (
    <div>
        <span>hidden tickets</span>
        <span id={"hideTicketsCounter"}>{props.numberOfHidden}</span>
    </div>
    )
}

export default HiddenCounter