import React, { useState, useEffect, forwardRef } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';

import { useStyles } from './ModalBody.styles';
import styles from  "./ModalBody.module.scss";

export const ModalBody = forwardRef(({ user, closeModal, onSubmitUpdateUser }, ref) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({ id: '', name: '', color: '' });

  useEffect(() => {
    setUserData(user)
  }, [])

  const handleNameUpdate = (e) => {
    setUserData({ ...userData, name: e.target.value });
  }

  const handleColorUpdate = (e) => {
    setUserData({ ...userData, color: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/users/${userData.id}`, { userData })
      .then(() => {
        onSubmitUpdateUser(userData);
      })
      .catch((err) => {
        throw err
      })
  }
  return (

    <div ref={ref} className={styles.wrapper}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="standard-basic" fullWidth label="Name" value={userData.name} onChange={handleNameUpdate} />
        <TextField id="standard-basic" fullWidth label="Color" value={userData.color} onChange={handleColorUpdate} />
        <div className="">
          Pick a color from <a href="https://color.adobe.com/create/color-wheel" target="_blank" rel="noreferrer" >here</a>
        </div>
        <div className={styles['buttons-container']}>
          <Button type="submit" variant="contained" color="primary">Update</Button>
          <Button variant="contained" onClick={closeModal}>Cancel</Button>
        </div>
      </form>
    </div>
  );
});
