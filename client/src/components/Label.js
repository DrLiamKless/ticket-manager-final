import React from 'react';
import axios from 'axios';

function Label(props) {
  const findLabels = (label) => {
    const sameLabelTickets = props.allTickets.filter((ticket) => {
      if (ticket.labels) {
        return ticket.labels.includes(label);
      }
      return false;
    });
    props.setTicketsToShow(sameLabelTickets);
  };
  return (
    <div className="labels">
      {props.labels && props.labels.map((label, i) => (
        <div key={i} onClick={() => { findLabels(label); }} className="label">{label}</div>
      ))}
    </div>
  );
}

export default Label;
