import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import RestoreIcon from '@material-ui/icons/Restore';

// function that changes the ToRestore State - activates the useEffect in the HideButton component
function RestoreButton(props) {
  function restoreAll() {
    props.setToRestore(!props.toRestore);
    props.setTicketsToShow(props.allTickets);
  }

  return (
    <IconButton onClick={restoreAll} id="restoreHideTickets">
      <Badge>
        <RestoreIcon />
      </Badge>
    </IconButton>
  );
}

export default RestoreButton;
