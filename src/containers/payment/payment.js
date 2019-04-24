import React, { Component } from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class Payment extends Component {
  state = {
    total: ""
  };

  tryState = () => {
    this.setState({
      total: this.props.total
    });
    console.log(this.state.total);
  };
  render() {
    return (
      <div>
        <Jumbotron style={{ backgroundColor: "white" }} fluid>
          <Container fluid>
            <div style={{ textAlign: "right" }}>
              <h5>Belanjaan Kamu :</h5>
              <h2 style={{ marginRight: "60px" }}>{this.props.total}</h2>

              <Button
                onClick={this.tryState}
                style={{ marginRight: "10px" }}
                color="primary"
                tag={Link}
                to="/payment"
              >
                Pesan Sekarang
              </Button>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
