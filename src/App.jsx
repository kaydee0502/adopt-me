import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details.js";
import Pnf404 from "./pnf404";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        
        <Switch>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <SearchParams />
          </Route>
          <Route>
            <Pnf404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
