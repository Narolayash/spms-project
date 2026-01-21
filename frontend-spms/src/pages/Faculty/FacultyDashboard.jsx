import React from "react";
import { useNavigate } from "react-router-dom";

function FacultyDashboard() {
  const navigate = useNavigate();

  const summary = {
    groups: 4,
    pendingProposals: 2,
    upcomingMeetings: 3,
    pendingDocs: 1,
  };

  const meetings = [
    {
      id: 1,
      group: "Group Alpha",
      date: "20 Feb 2026",
      purpose: "Module Review",
    },
    {
      id: 2,
      group: "Group Beta",
      date: "22 Feb 2026",
      purpose: "Progress Check",
    },
  ];

  return (
    <>
      <h3>Faculty Dashboard</h3>

      {/* Summary Cards */}
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5>Total Groups</h5>
              <h2>{summary.groups}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5>Pending Proposals</h5>
              <h2>{summary.pendingProposals}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5>Upcoming Meetings</h5>
              <h2>{summary.upcomingMeetings}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-body">
              <h5>Pending Documents</h5>
              <h2>{summary.pendingDocs}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="card mt-4">
        <div className="card-body">
          <h5>Upcoming Meetings</h5>

          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Group</th>
                <th>Date</th>
                <th>Purpose</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((m) => (
                <tr key={m.id}>
                  <td>{m.group}</td>
                  <td>{m.date}</td>
                  <td>{m.purpose}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() =>
                        navigate(`/faculty/project-groups`)
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/faculty/project-groups")}
        >
          My Project Groups
        </button>

        <button
          className="btn btn-warning"
          onClick={() => navigate("/faculty/project-groups")}
        >
          Pending Proposals
        </button>

        <button
          className="btn btn-success"
          onClick={() => navigate("/faculty/reports")}
        >
          View Reports
        </button>
      </div>
    </>
  );
}

export default FacultyDashboard;
