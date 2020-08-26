import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import DoneIcon from '@material-ui/icons/Done';


function ShowDone(props) {


        const loadDone = () => {
            if (props.toShowDone === false) {
                props.setToShowUndone(false);
                props.setToShowDone(true);
                props.setTicketsToShow(props.doneTickets);
            } else {
                props.setToShowDone(false)
                props.setTicketsToShow(props.allTickets);
            }
    }
    

    return (    
        <IconButton onClick={loadDone} id={"showDoneButton"}>
             <Badge badgeContent={props.doneTickets.length} color="secondary">
                <DoneIcon>
                </DoneIcon>
            </Badge>
        </IconButton>
    )
}

export default ShowDone