import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import clsx from 'clsx';

import { Header } from "./components/layout/Header";
import { Home } from "./components/modules/Home/Home";
import { CalendarNew } from "./components/modules/Calendar/Calendar";
import { Users } from "./components/modules/Users/Users";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const routes = [['home', '/'], ['calendar', '/calendar'], ['user', '/users']]

const App = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openParentState = (boolean) => {
    setOpen(boolean)
  }

  return (
    <Router>
      <div className={classes.root}>
        <Header openParentState={openParentState} />
        <div className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.drawerHeader} />
          <Container >
            <Box py={4}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/calendar">
                  <CalendarNew />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
              </Switch>
            </Box>
          </Container>
        </div>
      </div>
    </Router>
  );
};

export default App;
