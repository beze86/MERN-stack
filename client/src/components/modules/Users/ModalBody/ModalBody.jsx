import React, { useState, useEffect, forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

import { useStyles } from './ModalBody.styles';
import "./ModalBody.css";

export const ModalBody = forwardRef(({ user, closeModal, onSubmitUpdateUser }, ref) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({id:'', name: '', color: ''});

  useEffect(() => {
    setUserData(user)
  }, [])

  const handleNameUpdate = (e) => {
    setUserData({...userData, name: e.target.value});
  }

  const handleColorUpdate = (e) => {
    setUserData({...userData, color: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/users/${userData.id}`, {userData})
    .then(() => {
      onSubmitUpdateUser(userData);
    })
    .catch((err) => {
      throw err
    })
  }
  return (
    
    <div ref={ref} className="paper">
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="standard-basic" fullWidth label="Name" value={userData.name} onChange={handleNameUpdate} />
        <TextField id="standard-basic" fullWidth label="Color" value={userData.color} onChange={handleColorUpdate} />
        <div className="">
          Pick a color from <a href="https://color.adobe.com/create/color-wheel" target="_blank" rel="noreferrer" >here</a>
        </div>
        <div className="modal-buttons-container">
          <Button type="submit" variant="contained" color="primary">Update</Button>
          <Button variant="contained" onClick={closeModal}>Cancel</Button>
        </div>
      </form>
    </div>
  );
});
