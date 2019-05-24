import React, { Component } from "react";
import Login from "./Login";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import history from "../history";
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
