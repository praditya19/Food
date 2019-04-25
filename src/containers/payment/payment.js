import React, { Component } from "react";
import Header from "../../components/header";
import Checkout from "../../components/checkout";
export default class Payment extends Component {
  render() {
    return (
      <div>
        <Header name="payment" />
        <Checkout />
      </div>
    );
  }
}
