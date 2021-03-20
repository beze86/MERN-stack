import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ModalBody.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: '16px',
    },
  },
}));

export const ModalBody = React.forwardRef(({ user, closeModal }, ref) => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');
  const [userArea, setUserArea] = useState('');

  useEffect(() => {
    setUserName(user.name)
    setUserColor(user.color)
    setUserArea(user.area)
  }, [])

  const handleNameUpdate = (e) => {
    setUserName(e.target.value);
  }

  const handleColorUpdate = (e) => {
    setUserColor(e.target.value);
  }

  const handleAreaUpdate = (e) => {
    setUserArea(e.target.value);
  }

  return (
    <div ref={ref} className="paper">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" fullWidth label="Name" value={userName} onChange={handleNameUpdate} />
        <TextField id="standard-basic" fullWidth label="Color" value={userColor} onChange={handleColorUpdate}  />
        <TextField id="standard-basic" fullWidth label="Area" value={userArea} onChange={handleAreaUpdate} />
        <Button variant="contained" color="primary">Update</Button>
        <Button variant="contained" onClick={closeModal}>Cancel</Button>
      </form>
    </div>
  );
});
