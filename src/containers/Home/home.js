import React, { Component } from "react";
import Header from "../../components/header";
import Jumbo from "../../components/jumbotron";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header nama="Home" />
        <Jumbo title="Go-Food" judul="Welcome To Go-Food" />
      </div>
    );
  }
}
