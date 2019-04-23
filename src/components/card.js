import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Counter from "./counter";
const Kartu = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="700px"
          height="400px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILnYXbY9gmWD1cPYIP7UB6DQdzlthk0E0kBYcLwTKJrLKVl4H"
          alt="Card image cap"
        />
        <center>
          <CardBody>
            <h1>{props.menu}</h1>
            <CardTitle>{props.minuman}</CardTitle>
            <CardSubtitle>Pesan Berapa</CardSubtitle>
          </CardBody>
        </center>
        <Counter />
      </Card>
    </div>
  );
};

export default Kartu;
