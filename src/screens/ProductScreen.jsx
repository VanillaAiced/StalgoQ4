import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import React from "react";
import products from "../products";

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!product) return <div className="mt-4">Project not found</div>;

  return (
    <>
      <Link to="/" className="d-inline-block mb-3 text-decoration-none">
        &larr; Back to projects
      </Link>

      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h2>{product.project_name}</h2>
          <p className="text-secondary mt-2">{product.project_description}</p>
        </div>
        <Link to={`/project/${id}/task/create`} className="btn btn-primary">
          Add Task
        </Link>
      </div>

      <Row className="g-3 mb-4">
        <Col xs={6} md={3}>
          <div className="border rounded p-3">
            <div className="text-muted small mb-1">Status</div>
            <div className="fw-semibold">{product.status}</div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="border rounded p-3">
            <div className="text-muted small mb-1">Hours</div>
            <div className="fw-semibold">{product.hours_consumed}h</div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="border rounded p-3">
            <div className="text-muted small mb-1">Start</div>
            <div className="fw-semibold">{product.start_date}</div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="border rounded p-3">
            <div className="text-muted small mb-1">End</div>
            <div className="fw-semibold">{product.end_date}</div>
          </div>
        </Col>
      </Row>

      {product.tasks && product.tasks.length > 0 ? (
        <>
          <h5 className="mb-3">Tasks</h5>
          {product.tasks.map((task) => (
            <div className="border rounded p-3 mb-3" key={task._id}>
              <div className="d-flex justify-content-between mb-2">
                <strong>{task.task_name}</strong>
                <span className="badge bg-secondary">{task.status}</span>
              </div>
              <p className="text-muted mb-2 small">{task.task_description}</p>
              <div className="d-flex flex-wrap gap-3 small text-muted">
                <span>
                  Assigned:{" "}
                  <strong className="text-dark">{task.user_assigned}</strong>
                </span>
                <span>
                  Hours:{" "}
                  <strong className="text-dark">{task.hours_consumed}h</strong>
                </span>
                <span>
                  {task.start_date} - {task.end_date}
                </span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-5 text-muted">
          <p>No tasks yet</p>
          <Link
            to={`/project/${id}/task/create`}
            className="btn btn-sm btn-outline-primary"
          >
            Create first task
          </Link>
        </div>
      )}
    </>
  );
}

export default ProductScreen;
