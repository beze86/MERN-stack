import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import clsx from 'clsx';

import { useStyles } from './App.styles';

import { AdminProvider } from './contexts/Admin/AdminProvider';

import { Header } from "./components/layout/Header";
import { Home, CalendarNew, Users, NotFound404, ShoppingList } from "./components/modules";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f394a',
      light: '#ededed'
    },
  },
});

export const routes = [['home', '/'], ['calendar', '/calendar'], ['user', '/users'], ['shopping-list', '/shopping-list']]

const App = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openParentState = (boolean) => {
    setOpen(boolean)
  }


  return (
    <AdminProvider>
      <ThemeProvider theme={customTheme}>
        <Router>
          <div className={classes.root}>
            <Header openParentState={openParentState} />
            <div className={clsx(classes.content, {
              // [classes.contentShift]: open,
            })}>
              <div className={classes.drawerHeader} />
              <Container >
                <Box py={4}>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/calendar">
                      <CalendarNew />
                    </Route>
                    <Route exact path="/users">
                      <Users />
                    </Route>
                    <Route exact path="/shopping-list">
                      <ShoppingList />
                    </Route>
                    <Route>
                      <NotFound404 />
                    </Route>
                  </Switch>
                </Box>
              </Container>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </AdminProvider>
  );
};

export default App;
