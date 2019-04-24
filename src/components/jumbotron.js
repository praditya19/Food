import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.judul}</p>
        <hr className="my-2" />

        <p className="lead">
          <Button tag={Link} to="/dashbor" color="primary">
            Pesan Sekarang
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
