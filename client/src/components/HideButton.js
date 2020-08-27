import React, { useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function HideButton(props) {
  const toHide = () => {
    props.setDisplay('none');
    props.setNumberOfHidden(props.numberOfHidden + 1);
    props.setClassName('hiddenTicket');
  };

  // UseEffect to restore Classname + style
  useEffect(() => {
    props.setDisplay('block');
    props.setNumberOfHidden(0);
    props.setClassName('ticket');
  }, [props.toRestore]);

  return (
    <IconButton
      className="hideTicketButton"
      aria-label="hide"
      onClick={toHide}
    >
      <VisibilityOffIcon />
    </IconButton>
  );
}

export default HideButton;
