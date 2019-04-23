import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    harga: 0,
    biaya: 1000 * 20
  };

  tambah = () => {
    this.setState(({ number, harga, biaya }) => ({
      number: number + 1,
      harga: harga + biaya
    }));
  };

  kurang = () => {
    var number = this.state.number;

    if (number > 0) {
      this.setState(({ number, harga, biaya }) => ({
        number: number - 1,
        harga: harga - biaya
      }));
    }
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1>{this.state.number}</h1>
        <button
          style={{
            backgroundColor: "green",
            width: "40px",
            height: "40px",
            borderRadius: "5px"
          }}
          onClick={this.tambah}
        >
          +
        </button>{" "}
        <button
          style={{
            backgroundColor: "red",
            width: "40px",
            height: "40px",
            borderRadius: "5px"
          }}
          className="button2"
          onClick={this.kurang}
        >
          -
        </button>
        <br />
        <br />
        <p>Harga : {this.state.harga}</p>
      </div>
    );
  }
}

export default Counter;
