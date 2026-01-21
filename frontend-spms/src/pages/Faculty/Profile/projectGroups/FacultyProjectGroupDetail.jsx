import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyProjectGroupDetail() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h3>Project Group Detail</h3>

      <div className="card mb-3">
        <div className="card-body">
          <h5>AI Attendance System</h5>
          <p><b>Project Type:</b> Major</p>
          <p><b>Area:</b> Artificial Intelligence</p>
          <p><b>Description:</b> Smart attendance using face recognition.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5>Group Members</h5>
          <ul>
            <li>Amit Patel (Leader)</li>
            <li>Neha Sharma</li>
            <li>Rahul Mehta</li>
          </ul>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-success"
          onClick={() =>
            navigate(`/faculty/project-groups/${groupId}/proposal`)
          }
        >
          View Proposal
        </button>

        <button
          className="btn btn-info"
          onClick={() =>
            navigate(`/faculty/project-groups/${groupId}/meetings`)
          }
        >
          Meetings
        </button>

        <button
          className="btn btn-secondary"
          onClick={() =>
            navigate(`/faculty/project-groups/${groupId}/documents`)
          }
        >
          Documents
        </button>

        <button
            className="btn btn-warning"
            onClick={() =>
                navigate(`/faculty/project-groups/${groupId}/evaluation`)
            }
            >
            Evaluate Project
        </button>

      </div>
    </>
  );
}

export default FacultyProjectGroupDetail;
