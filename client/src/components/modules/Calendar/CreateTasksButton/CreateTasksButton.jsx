import React from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios';

import styles from  './CreateTasksButton.module.scss';


export const CreateTasksButton = () => {

    const handleClick = () => {
        axios.post(`/api/calendar-events`)
            .then(() => {
                window.location.reload()
            })
            .catch((err) => {
                throw err
            })
    }

    return (
        <div className={styles.wrapper}>
            <Button variant="contained" color="primary" onClick={handleClick}>Get weekly tasks</Button>
        </div>
    )
}