import React, { Component } from "react";
import Header from "../../components/header";
import Halaman from "../../components/halaman";

class Dashbor extends Component {
  render() {
    return (
      <div>
        <Header nama="Menu Makanan" />
        <Halaman />
      </div>
    );
  }
}

export default Dashbor;
