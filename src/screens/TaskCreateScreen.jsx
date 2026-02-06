import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function TaskCreateScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [userAssigned, setUserAssigned] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const users = [
    { id: 1, name: "Mike Chen", role: "user" },
    { id: 2, name: "Sarah Johnson", role: "user" },
    { id: 3, name: "David Martinez", role: "manager" },
    { id: 4, name: "Emily Wong", role: "user" },
  ];

  const currentUserRole = "admin";

  const availableUsers =
    currentUserRole === "admin"
      ? users
      : users.filter((u) => u.role === "user");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      task_name: taskName,
      task_description: taskDescription,
      user_assigned: userAssigned,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await fetch(`/api/v1/projects/${id}/task/create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        navigate(`/product/${id}`);
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <>
      <Link
        to={`/product/${id}`}
        className="d-inline-block mb-3 text-decoration-none"
      >
        &larr; Back to project
      </Link>

      <h3 className="mb-4">New Task</h3>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Task Name *</Form.Label>
              <Form.Control
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
                placeholder="Enter task name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Add details about this task..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Assign to</Form.Label>
              <Form.Select
                value={userAssigned}
                onChange={(e) => setUserAssigned(e.target.value)}
              >
                <option value="">Select user</option>
                {availableUsers.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex gap-2 mt-4">
              <Button type="submit" variant="primary">
                Create Task
              </Button>
              <Button
                variant="light"
                onClick={() => navigate(`/product/${id}`)}
              >
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default TaskCreateScreen;
