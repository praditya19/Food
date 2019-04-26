import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashbor from "./containers/Dashbor";
import Home from "./containers/Home";
import Payment from "./containers/payment/payment";
import Next from "./components/next";
import Login from "./containers/login/register";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashbor" exact component={Dashbor} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/dashbor/next" exact component={Next} />
          <Route path="/login" exact component={Login} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
