import React, { useState} from 'react';
import HideButton from './HideButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Ticket(props) {

    const [display, setDisplay] = useState("flex")
    const [className, setClassName] = useState("ticket")

    let creationTime = new Date(props.creationTime)
    const date = `${creationTime.getFullYear()}-${(creationTime.getMonth() + 1)}-${creationTime.getDate()}`
    const time = `${creationTime.getHours()}:${creationTime.getMinutes()}:${creationTime.getSeconds()}`

    return (
        <div 
            className={className}
            style={{display: display}}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-label="Expand"
                        aria-controls="panel2a-content"
                        id="additional-actions1-header">
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox/>}
                            label={props.title}/>
                            <div className={"additionsToBar"}>
                                {props.labels && props.labels.map((label, i) => (
                                        <div key={i} className={"label"}>{label}</div>
                                    ))}
                                </div>
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
                        <p>User's Email: <a href={"#"} target={"_blank"}> {props.userEmail}</a> | {date} | {time}</p>
                </Accordion>
        </div>
    )
}

export default Ticket