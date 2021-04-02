import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { Header } from "./components/layout/Header";

import { Home } from "./components/modules/Home/Home";
import { CalendarNew } from "./components/modules/Calendar/Calendar";
import { Users } from "./components/modules/Users/Users";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
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
    </Router>
  );
};

export default App;
