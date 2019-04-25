import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">
            <img
              src="https://bilba.go-jek.com/dist/img/gojek-logo.png"
              width="110"
              height="30"
              alt="/"
            />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
