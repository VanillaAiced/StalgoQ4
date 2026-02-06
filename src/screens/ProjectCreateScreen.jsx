import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

function ProjectCreateScreen() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [hoursConsumed, setHoursConsumed] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        task_name: "",
        task_description: "",
        status: "Pending",
        hours_consumed: 0,
        user_assigned: "",
        start_date: "",
        end_date: "",
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = (id, field, value) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      projectName,
      projectDescription,
      status,
      hoursConsumed,
      startDate,
      endDate,
      tasks,
    });
    navigate("/");
  };

  return (
    <>
      <Link to="/" className="d-inline-block mb-3 text-decoration-none">
        &larr; Back
      </Link>

      <h3 className="mb-4">Create New Project</h3>

      <Form onSubmit={handleSubmit}>
        <Card className="mb-4">
          <Card.Body>
            <h5 className="mb-3">Project Details</h5>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>On Hold</option>
                    <option>Completed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Hours Consumed</Form.Label>
                  <Form.Control
                    type="number"
                    value={hoursConsumed}
                    onChange={(e) => setHoursConsumed(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Tasks</h5>
          <Button variant="outline-primary" size="sm" onClick={addTask}>
            + Add Task
          </Button>
        </div>

        {tasks.map((task, index) => (
          <Card className="mb-3" key={task.id}>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <strong>Task {index + 1}</strong>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeTask(task.id)}
                >
                  Remove
                </Button>
              </div>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={task.task_name}
                      onChange={(e) =>
                        updateTask(task.id, "task_name", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      value={task.status}
                      onChange={(e) =>
                        updateTask(task.id, "status", e.target.value)
                      }
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={task.task_description}
                  onChange={(e) =>
                    updateTask(task.id, "task_description", e.target.value)
                  }
                />
              </Form.Group>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control
                      type="text"
                      value={task.user_assigned}
                      onChange={(e) =>
                        updateTask(task.id, "user_assigned", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Hours</Form.Label>
                    <Form.Control
                      type="number"
                      value={task.hours_consumed}
                      onChange={(e) =>
                        updateTask(task.id, "hours_consumed", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Start</Form.Label>
                    <Form.Control
                      type="date"
                      value={task.start_date}
                      onChange={(e) =>
                        updateTask(task.id, "start_date", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>End</Form.Label>
                    <Form.Control
                      type="date"
                      value={task.end_date}
                      onChange={(e) =>
                        updateTask(task.id, "end_date", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}

        <div className="d-flex gap-2">
          <Button type="submit" variant="primary">
            Create Project
          </Button>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ProjectCreateScreen;
