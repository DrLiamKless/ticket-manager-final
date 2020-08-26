import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HideButton from './HideButton';
import CheckBox from './CheckBox';
import Label from './Label';

function Ticket(props) {
  const [display, setDisplay] = useState('flex');
  const [className, setClassName] = useState('ticket');

  //making the creation Time readable
  const creationTime = new Date(props.creationTime);
  const date = `${creationTime.getDate()}-${(creationTime.getMonth() + 1)}-${creationTime.getFullYear()}`;
  const time = `${creationTime.getHours()}:${creationTime.getMinutes()}:${creationTime.getSeconds()}`;

  return (
    <div
      className={className}
      style={{ display }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="panel2a-content"
          id="additional-actions1-header"
        >

          <FormControlLabel
            aria-label="Done"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={(
              <CheckBox
                index={props.index}
                id={props.id}
                doneTickets={props.doneTickets}
                setDoneTickets={props.setDoneTickets}
                undoneTickets={props.undoneTickets}
                setUndoneTickets={props.setUndoneTickets}
                setTicketsToShow={props.setTicketsToShow}
                isDoneProp={props.isDoneProp}
                setNumberOfDone={props.setNumberOfDone}
                setNumberOfUndone={props.setNumberOfUndone}
                setAllTickets={props.setAllTickets}
              />
            )}
            label={(
              <Typography>
                <h4
                  style={props.isDoneProp === true
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }}
                >
                  {props.title}
                </h4>
                <p className="craetionTime">
                  From:
                  <a href="#" target="_blank">
                    {' '}
                    {props.userEmail}
                  </a>
                  | At:
                  {' '}
                  {date}
                  {' '}
                  |
                  {' '}
                  {time}
                </p>
              </Typography>
            )}
          />
          <Label 
            labels={props.labels}
            allTickets={props.allTickets}
            setTicketsToShow={props.setTicketsToShow}
            ticketsToShow={props.ticketsToShow}>
          </Label>
          <HideButton
            numberOfHidden={props.numberOfHidden}
            setNumberOfHidden={props.setNumberOfHidden}
            setDisplay={setDisplay}
            setClassName={setClassName}
            toRestore={props.toRestore}
            setToRestore={props.setToRestore}>
          </HideButton>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            {props.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Ticket;
