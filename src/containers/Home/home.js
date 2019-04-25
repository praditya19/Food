import React, { Component } from "react";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header nama="Go-Food" />
        <Carousel />
      </div>
    );
  }
}
