import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";

function Homescreen() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Projects</h3>
        <Link to="/projects/create" className="btn btn-primary btn-sm">
          New Project
        </Link>
      </div>

      <Table hover responsive>
        <thead>
          <tr>
            <th>Project</th>
            <th>Status</th>
            <th className="text-end">Hours</th>
            <th>Timeline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <React.Fragment key={p._id}>
              <tr
                onClick={() => setExpanded(expanded === p._id ? null : p._id)}
                style={{ cursor: "pointer" }}
                className={expanded === p._id ? "table-active" : ""}
              >
                <td className="fw-semibold">{p.project_name}</td>
                <td>
                  <span
                    className={`badge ${p.status === "Completed" ? "bg-success" : "bg-primary"}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="text-end">{p.hours_consumed}h</td>
                <td className="text-muted small">
                  {p.start_date} - {p.end_date}
                </td>
                <td onClick={(e) => e.stopPropagation()}>
                  <Link to={`/product/${p._id}`}>View</Link>
                </td>
              </tr>
              {expanded === p._id && (
                <tr>
                  <td colSpan={5} className="bg-light">
                    <div className="py-3">
                      <p className="mb-3">{p.project_description}</p>
                      {p.tasks && p.tasks.length > 0 && (
                        <>
                          <strong className="d-block mb-2">Tasks</strong>
                          <div className="ms-3">
                            {p.tasks.map((t) => (
                              <div
                                key={t._id}
                                className="mb-2 pb-2 border-bottom"
                              >
                                <div className="d-flex justify-content-between">
                                  <span>{t.task_name}</span>
                                  <span className="badge bg-secondary">
                                    {t.status}
                                  </span>
                                </div>
                                <div className="small text-muted mt-1">
                                  {t.user_assigned} • {t.hours_consumed}h
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Homescreen;
