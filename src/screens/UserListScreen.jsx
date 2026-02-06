import React, { useState, useEffect } from "react";
import { Table, Badge, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserListScreen() {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      role: "admin",
    },
    {
      id: 2,
      first_name: "Sarah",
      last_name: "Johnson",
      email: "sarah.j@example.com",
      role: "manager",
    },
    {
      id: 3,
      first_name: "Mike",
      last_name: "Chen",
      email: "mike.chen@example.com",
      role: "user",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRoleBadge = (role) => {
    const colors = {
      admin: "danger",
      manager: "primary",
      user: "secondary",
    };
    return colors[role.toLowerCase()] || "secondary";
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Users</h3>
        <div className="d-flex gap-2 align-items-center">
          <span className="text-muted">{users.length} total</span>
          <Link to="/users/create" className="btn btn-primary btn-sm">
            Add User
          </Link>
        </div>
      </div>

      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id || user.email}>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td className="text-muted">{user.email}</td>
              <td>
                <Badge bg={getRoleBadge(user.role)} pill>
                  {user.role}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {users.length === 0 && (
        <div className="text-center py-4 text-muted">No users found</div>
      )}
    </>
  );
}

export default UserListScreen;
