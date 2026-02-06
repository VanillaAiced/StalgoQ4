import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ project }) {
  return (
    <Link to={`/product/${project._id}`} className="text-decoration-none">
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <h5 className="text-dark">{project.project_name}</h5>
          <p className="text-muted small mb-2">{project.project_description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-primary">{project.status}</span>
            <span className="text-muted small">{project.hours_consumed}h</span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
