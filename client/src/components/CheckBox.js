import React from 'react';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

function CheckBox(props) {

    const postDone = event => {
        if (event.target.checked) {
            axios.post(`/api/tickets/${props.id}/done`).then (
                axios.get(`/api/tickets`).then(res => {
                const allTickets = res.data;
                const doneTickets = allTickets.filter(ticket => (
                    ticket["done"]
                ));
                const undoneTickets = allTickets.filter(ticket => (
                    !ticket["done"]
                ))
                props.setAllTickets(allTickets)
                props.setTicketsToShow(allTickets);
                props.setDoneTickets(doneTickets);
                props.setUndoneTickets(undoneTickets)
                props.setNumberOfDone(doneTickets.length)
                props.setNumberOfUndone(undoneTickets.length)
            }));
        } else {
            axios.post(`/api/tickets/${props.id}/undone`).then (
                axios.get(`/api/tickets`).then(res => {
                const allTickets = res.data;
                const doneTickets = allTickets.filter(ticket => (
                    ticket["done"]
                ));
                const undoneTickets = allTickets.filter(ticket => (
                    !ticket["done"]
                ))
                props.setTicketsToShow(allTickets);
                props.setAllTickets(allTickets)
                props.setDoneTickets(doneTickets);
                props.setUndoneTickets(undoneTickets)
                props.setNumberOfDone(doneTickets.length)
                props.setNumberOfUndone(undoneTickets.length)
            }));
        }
    }

    return (
        <Checkbox className={"checkbox"} onChange={postDone} checked={props.isDoneProp}></Checkbox>
    )
}

export default CheckBox