import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ project }) {
  return (
    <Link to={`/product/${project._id}`} className="card-link">
      <Card className="my-3 p-3 rounded">{project.name}</Card>
    </Link>
  );
}

export default Product;
