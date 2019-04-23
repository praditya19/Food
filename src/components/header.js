import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "green" }} light expand="md">
          <NavbarBrand style={{ color: "white" }} href="/">
            reactstrap
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
