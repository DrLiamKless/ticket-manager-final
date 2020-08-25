import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Badge from '@material-ui/core/Badge';


function RestoreButton(props) {

    async function restoreAll() {
        props.setToRestore(!props.toRestore);
    }

    return (    
        <IconButton onClick={restoreAll} id={"restoreHideTickets"}>
             <Badge>
                <VisibilityOutlinedIcon>
                </VisibilityOutlinedIcon>
            </Badge>
        </IconButton>
    )
}

export default RestoreButton