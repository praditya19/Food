import React, { Component } from "react";
import Counter from "./counter";
import { Row, Col, Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
export default class Halaman1 extends Component {
  state = {
    makanan: [
      {
        id: 1,
        number: 0,
        price: 15000,
        nama: "kebab",
        gambar:
          "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5451_foto-dafafoodindocom.jpg"
      },
      {
        id: 2,
        price: 17000,
        number: 0,
        nama: "hamburger",
        gambar:
          "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
      },
      {
        id: 3,
        price: 12000,
        number: 0,
        nama: "kentang goreng",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw"
      },
      {
        id: 4,
        price: 10000,
        number: 0,
        nama: "Nasi Uduk mcD",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyQ8YDdLZyuMzaDjtgPsjuEJDKth7JmJDFHcj_RhsWTb_VcDk"
      },

      {
        id: 5,
        number: 0,
        price: 17000,
        nama: "kebab",
        gambar:
          "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5451_foto-dafafoodindocom.jpg"
      },
      {
        id: 6,
        number: 0,
        price: 15000,
        nama: "spagheti",
        gambar:
          "https://doktersehat.com/wp-content/uploads/2018/12/resep-spaghetti-doktersehat.jpg"
      },
      {
        id: 6,
        number: 0,
        price: 15000,
        nama: "spagheti",
        gambar:
          "https://doktersehat.com/wp-content/uploads/2018/12/resep-spaghetti-doktersehat.jpg"
      },
      {
        id: 6,
        number: 0,
        price: 15000,
        nama: "spagheti",
        gambar:
          "https://doktersehat.com/wp-content/uploads/2018/12/resep-spaghetti-doktersehat.jpg"
      }
    ],
    total: 0
  };

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
    sessionStorage.total = this.state.total + harga;
  };
  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.makanan.map((item, index) => (
            <Col xs="3">
              <Counter
                nomor={item.number}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
                gambar={item.gambar}
                indexMakanan={index}
                name={item.nama}
                harga={item.price}
              />
            </Col>
          ))}
        </Row>
        <br />

        <Jumbotron style={{ backgroundColor: "white" }}>
          <div style={{ textAlign: "right" }}>
            <p style={{ marginRight: "25px" }}>Total Belanja:</p>

            <p style={{ marginRight: "50px" }}>{this.state.total}</p>

            <Button
              style={{ marginRight: "1000px" }}
              tag={Link}
              to="/"
              color="primary"
            >
              Kembali ke Home
            </Button>

            <Button
              style={{ textAlign: "left" }}
              tag={Link}
              to="/payment"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
