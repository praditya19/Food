import React, { Component } from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class Checkout extends Component {
  componentDidMount() {
    var x = sessionStorage.total;
    document.getElementById("totalHarga").innerHTML = x;
  }

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Jumbotron fluid>
          <Container fluid>
            <div style={{ textAlign: "right" }}>
              <h1 style={{ textAlign: "center" }} className="display-3">
                Total yang harus di bayar:
              </h1>
              <p style={{ marginRight: "50px" }} id="totalHarga" />
              <Button
                style={{ marginRight: "1000px" }}
                tag={Link}
                to="/dashbor"
                color="primary"
              >
                Kembali ke Dashbor
              </Button>

              <Button className="btn btn-warning">Pesan Sekarang</Button>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
