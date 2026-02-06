import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import React from "react";
import products from "../products";

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title as="h2">{product.project_name}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Description:</strong> {product.project_description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Status:</strong> {product.status}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Hours Consumed:</strong> {product.hours_consumed}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Start Date:</strong> {product.start_date}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>End Date:</strong> {product.end_date}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          {product.tasks && product.tasks.length > 0 && (
            <Card>
              <Card.Header as="h3">Tasks</Card.Header>
              <Card.Body>
                {product.tasks.map((task, index) => (
                  <Card className="mb-3" key={task._id || index}>
                    <Card.Body>
                      <Card.Title as="h4">{task.task_name}</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <strong>Description:</strong> {task.task_description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>Status:</strong> {task.status}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>Hours Consumed:</strong> {task.hours_consumed}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>User Assigned:</strong> {task.user_assigned}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>Start Date:</strong> {task.start_date}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>End Date:</strong> {task.end_date}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
