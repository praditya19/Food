import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container
} from "reactstrap";
import Counter from "./counter";
const Kartu = props => {
  return (
    <div>
      <Container>
        <Card style={{ height: "280px", width: "350px" }}>
          <Row>
            <Col xs="6">
              <CardImg
                top
                width="100px"
                height="200px"
                src={props.gambar}
                alt="Card image cap"
              />
            </Col>
            <Col xs="6">
              <div body style={{ textAlign: "center", padding: "1px" }}>
                <CardBody>
                  <h5>{props.menu}</h5>
                  <CardTitle>{props.minuman}</CardTitle>
                  <h6>Pesan Berapa</h6>
                </CardBody>
                <Counter />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
      <br /> <br /> <br />
    </div>
  );
};

export default Kartu;
