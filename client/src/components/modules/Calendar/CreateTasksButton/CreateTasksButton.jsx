import React from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios';

import './CreateTasksButton.css';


export const CreateTasksButton = () => {

    const handleClick = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/calendar-events`)
            .then(() => {
                window.location.reload()
            })
            .catch((err) => {
                throw err
            })
    }

    return (
        <div className="button-container">
            <Button variant="contained" color="primary" onClick={handleClick}>Get weekly tasks</Button>
        </div>
    )
}