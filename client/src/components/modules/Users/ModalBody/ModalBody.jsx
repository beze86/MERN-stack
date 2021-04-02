import React, { useState, useEffect, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ModalBody.css";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: '16px',
    },
  },
}));

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
    axios.post(`http://localhost:3003/users`, {userData})
    .then(() => {
      console.log('ewrer')
      onSubmitUpdateUser(userData);
    })
    .catch((err) => {
      console.log('wqertrytui')
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
