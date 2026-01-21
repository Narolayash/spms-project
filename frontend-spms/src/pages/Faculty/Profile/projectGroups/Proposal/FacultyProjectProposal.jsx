import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyProjectProposal() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("Pending");
  const [remarks, setRemarks] = useState("");

  const handleApprove = () => {
    setStatus("Approved");
    alert("Project Proposal Approved");
    navigate(-1);
  };

  const handleReject = () => {
    if (!remarks) {
      alert("Please add remarks before rejecting");
      return;
    }
    setStatus("Rejected");
    alert("Project Proposal Rejected");
    navigate(-1);
  };

  return (
    <>
      <h3>Project Proposal</h3>

      {/* Proposal Details */}
      <div className="card mb-3">
        <div className="card-body">
          <p><b>Project Title:</b> AI Attendance System</p>
          <p><b>Project Type:</b> Major</p>
          <p>
            <b>Abstract:</b> This project focuses on facial recognition based
            smart attendance management system.
          </p>
          <p>
            <b>Proposal File:</b>{" "}
            <a href="#" className="btn btn-sm btn-outline-primary">
              View Document
            </a>
          </p>
        </div>
      </div>

      {/* Approval Section */}
      <div className="card">
        <div className="card-body">
          <p>
            <b>Current Status:</b>{" "}
            <span className="badge bg-warning text-dark">
              {status}
            </span>
          </p>

          <div className="mb-3">
            <label>Remarks</label>
            <textarea
              className="form-control"
              rows="3"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={handleApprove}>
              Approve
            </button>
            <button className="btn btn-danger" onClick={handleReject}>
              Reject
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyProjectProposal;
