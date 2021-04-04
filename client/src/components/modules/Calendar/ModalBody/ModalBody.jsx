import React, { useState, useEffect, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

import "./ModalBody.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: '16px',
    },
  },
}));

export const ModalBody = forwardRef(({ user, closeModal, onSubmitUpdateEvent }, ref) => {
  const classes = useStyles();
  const [eventData, setEventData] = useState({id:'', title: '', description: ''});

  useEffect(() => {
    setEventData(user)
  }, [])

  const handleColorUpdate = (e) => {
    setEventData({...eventData, description: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3003/calendar-events/${eventData._id}`, {eventData})
    .then(() => {
      onSubmitUpdateEvent(eventData);
    })
    .catch((err) => {
      throw err
    })
  }
  return (
    
    <div ref={ref} className="paper">
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="standard-basic" fullWidth label="Name" value={eventData.title} disabled/>
        <TextField id="standard-basic" fullWidth label="Description" value={eventData.description} onChange={handleColorUpdate} />
        <div className="modal-buttons-container">
          <Button type="submit" variant="contained" color="primary">Update</Button>
          <Button variant="contained" onClick={closeModal}>Cancel</Button>
        </div>
      </form>
    </div>
  );
});
