import React, { useState, useEffect } from 'react';
import HideButton from './HideButton';

function Ticket(props) {

    const [display, setDisplay] = useState("block")
    const [className, setClassName] = useState("ticket")

    return (
        <div 
        className={className}
        style={{display: display}}>
            <HideButton
            numberOfHidden={props.numberOfHidden}
            setNumberOfHidden={props.setNumberOfHidden}
            setDisplay={setDisplay}
            setClassName={setClassName}
            toRestore={props.toRestore}
            setToRestore={props.setToRestore}>
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