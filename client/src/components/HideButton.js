import React, { useState, useEffect } from 'react';

function HideButton(props) {

        const toHide = () => {
            props.setDisplay("none");
            props.setNumberOfHidden(props.numberOfHidden + 1);
            props.setClassName("hiddenTicket");
    }

    useEffect(() => {
        props.setDisplay("block");
        props.setNumberOfHidden(0);
        props.setClassName("ticket");
        }, [props.toRestore]
      )

    return (    
        <button
            className={"hideTicketButton"}
            onClick={toHide}>hide</button>
    )
}

export default HideButton