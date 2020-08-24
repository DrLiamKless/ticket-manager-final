import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search(props) {

    const onInputChange = event => {
        props.setSearchText(event.target.value)
    }

    return (
        <input 
            placeholder={"Search Ticket"}
            id={"searchInput"}
            onChange={onInputChange}>
        </input>
    )
}

export default Search