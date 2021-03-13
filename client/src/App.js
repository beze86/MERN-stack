import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Home } from "./components/modules/Home/Home";
import { CalendarNew } from "./components/modules/Calendar/Calendar";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calendar">
            <CalendarNew />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
