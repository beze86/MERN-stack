import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import clsx from 'clsx';

import { useStyles } from './App.styles';

import { Header } from "./components/layout/Header";
import { Home } from "./components/modules/Home/Home";
import { CalendarNew } from "./components/modules/Calendar/Calendar";
import { Users } from "./components/modules/Users/Users";
import { NotFound404 } from './components/modules/NotFound/NotFound404';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f394a',
      light: '#ededed'
    },
  },
});


export const routes = [['home', '/'], ['calendar', '/calendar'], ['user', '/users']]

const App = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openParentState = (boolean) => {
    setOpen(boolean)
  }

  return (
    <ThemeProvider theme={customTheme}>
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
                  <Route exact path="/calendar">
                    <CalendarNew />
                  </Route>
                  <Route exact path="/users">
                    <Users />
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
  );
};

export default App;
