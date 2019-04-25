import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#00FF00" }} color="faded" light>
          <NavbarBrand style={{ color: "white" }} href="/" className="mr-auto">
            {this.props.nama}
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
