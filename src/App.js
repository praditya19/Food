import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashbor from "./containers/Dashbor";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashbor" exact component={Dashbor} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
