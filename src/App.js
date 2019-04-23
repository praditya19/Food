import React, { Component } from "react";
import Header from "./components/header";
import Card2 from "./components/card2";
import { Row, Col, Button, Navbar } from "reactstrap";
import "./App.css";

class App extends Component {
  state = {
    makanan: [
      {
        nama: "Hotdog",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r3Lt-_yKhAbsxk3IGgTQmDE7Ux_76RBopQI0yV9JIBBKQ1lFTA"
      },
      {
        nama: "Sosis",
        gambar:
          "https://res.cloudinary.com/dk0z4ums3/image/upload/v1537955499/attached_image/tips-sehat-mengonsumsi-sosis-dan-makanan-olahan-lain-alodokter.jpg"
      },
      {
        nama: "Burger",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjBXhUJccph9KZ0vrm95VTiS0CrAQbttdnPSfZ7luMcVUx-g-"
      },
      {
        nama: "Spageti",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj27vLJyr0bRy_gC-bskW1zDKdMqGzCeeXtRd2Sjvd3KJGHZSm1Q"
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <h1 style={{ textAlign: "center" }}>Menu Makanan</h1>
        <Row style={{ padding: "1px" }}>
          {this.state.makanan.map(item => (
            <Col xs="4">
              <Card2 gambar={item.gambar} menu={item.nama} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
