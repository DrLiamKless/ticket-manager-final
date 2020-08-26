import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import DateRangeIcon from '@material-ui/icons/DateRange';


function SortByDate(props) {

    const toSortByDate = () => {
        const sortedByDateTickets = props.ticketsToShow.slice();
        sortedByDateTickets.sort((a,b) => a.creationTime - b.creationTime)
        props.setTicketsToShow(sortedByDateTickets);
}
    

    return (    
        <IconButton onClick={toSortByDate} id={"showDoneButton"}>
             <Badge badgeContent={0} color="secondary">
                <DateRangeIcon>
                </DateRangeIcon>
            </Badge>
        </IconButton>
    )
}

export default SortByDate   