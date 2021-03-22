import React from 'react';
import Button from "@material-ui/core/Button";
import './CreateTasksButton.css';



export const CreateTasksButton = () => {

    return (
        <div className="button-container">
            <Button variant="contained" color="primary">Get weekly tasks</Button>
        </div>
    )
}