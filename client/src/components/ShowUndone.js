import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CloseIcon from '@material-ui/icons/Close';

// a function thats loading the unone list
function ShowUndone(props) {
  const loadUndone = () => {
    if (props.toShowUndone === false) {
      props.setToShowDone(false);
      props.setToShowUndone(true);
      props.setTicketsToShow(props.undoneTickets);
    } else {
      props.setToShowUndone(false);
      props.setTicketsToShow(props.allTickets);
    }
  };

  return (
    <IconButton onClick={loadUndone} id="showUndoneButton">
      <Badge badgeContent={props.undoneTickets.length} color="secondary">
        <CloseIcon />
      </Badge>
    </IconButton>
  );
}

export default ShowUndone;
