import React from 'react';
import axios from 'axios';

import Button from "@material-ui/core/Button";
import './CreateTasksButton.css';


export const CreateTasksButton = () => {

    const handleClick = () => {
        axios.post('http://localhost:3003/init')
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