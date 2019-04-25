import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">
            <img
              src="https://lelogama.go-jek.com/ramadhan2018_page_icon/go-food3x.png"
              width="120"
              height="50"
              alt="/"
            />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
