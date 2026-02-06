import React from "react";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
function Homescreen() {
  return (
    <div>
      <h1>Projects</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3} Col />
        <Product />
      </Row>
    </div>
  );
}

export default Homescreen;
