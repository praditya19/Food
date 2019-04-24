import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Navbar } from "reactstrap";

export default class Counter extends Component {
  state = {
    qty: 0
  };

  tambah = () => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };
  kurang = () => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };

  render() {
    console.log(this.props);
    return (
      <div style={{ padding: "10px" }}>
        <Card>
          <CardImg top width="100%" src={this.props.gambar} alt="Card" />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>
              {this.props.name}
            </CardTitle>
            <p>Pesan Berapa</p>
            <p>harga : {this.props.harga}</p>
            <Navbar>
              <Button onClick={this.tambah} size="lg" color="success">
                +
              </Button>{" "}
              <h1>{this.state.qty} </h1>
              <Button
                onClick={this.kurang}
                size="lg"
                className="btn btn-danger m-2"
              >
                -
              </Button>
            </Navbar>
          </CardBody>
        </Card>
      </div>
    );
  }
}
